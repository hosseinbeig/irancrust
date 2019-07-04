const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route  GET api/users
// @desc   Test route
// access  Public
//router.get('/', (req, res) => res.send('user route'));

// @route  Post api/users
// @desc   Register route
// access  Public
router.post(
  '/',
  // validation
  [
    check('name', 'لطفا نام خود را وارد کنید')
      .not()
      .isEmpty(),
    check('email', 'لطفا ایمیل معتبر وارد کنید').isEmail(),
    check('password', 'لطفا رمز عبور با ۶ کرکتر یا بیشتر وارد کنید').isLength({
      min: 6
    })
  ],
  async (req, res) => {
    // console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
      // if user already exist
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'ایمیل قبلا ثبت شده است' }] });
      }
      // gravatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'g',
        d: 'retro'
      });
      // create new user
      user = new User({
        name,
        email,
        avatar,
        password
      });
      // encrypt pass
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      // return jwt
      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
      // res.send('User registered');
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
