import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  });
  const [displaySocialInput, toggleSocialInput] = useState(false);
  const {
    شرکت,
    وبسایت,
    موقعیت,
    عنوان,
    تخصص,
    درباره,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <>
      <h1 className='large text-primary'>ساخت پروفایل</h1>
      <p className='lead'>
        <i className='fas fa-user' /> با ایجاد پروفایل راحت تر با هم فکران خود
        در ارتباط باشید
      </p>
      <small>* = قسمت‌های الزامی</small>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <select name='status' value={عنوان} onChange={e => onChange(e)}>
            <option value='0'>* رشته تحصیلی</option>
            <option value='زمین شناسی عمومی'>زمین شناسی عمومی</option>
            <option value='پترولوژی'>پترولوژی</option>
            <option value='چینه نگاری و فسیل شناسی'>
              چینه نگاری و فسیل شناسی
            </option>
            <option value='رسوب شناسی و سنگ شناسی رسوبی'>
              رسوب شناسی و سنگ شناسی رسوبی
            </option>
            <option value='زمین شناسی مهندسی'>زمین شناسی مهندسی</option>
            <option value='زمین شناسی اقتصادی'>زمین شناسی اقتصادی</option>
            <option value='زمین شناسی نفت'>زمین شناسی نفت</option>
            <option value='آب زمین شناسی'>آب زمین شناسی</option>
            <option value='سایر رشتها'>سایر رشتها</option>
          </select>
          <small className='form-text'>
            Give us an idea of where you are at in your career
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='شرکت'
            name='company'
            value={شرکت}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>محل کار یا تحقیق</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='وبسایت'
            name='website'
            value={وبسایت}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>وب سایت یا بلاگ</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='موقعیت'
            name='location'
            value={موقعیت}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>منطقه شهر یا استان</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* تخصص'
            name='skills'
            value={تخصص}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            لطفا هر تخصص رو با ، از دیگری جدا کنید
          </small>
        </div>
        <div className='form-group'>
          <textarea
            placeholder='درباره شما '
            name='bio'
            value={درباره}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>توضیحات بیشتر درباره شما</small>
        </div>

        <div className='my-2'>
          <button
            onClick={() => toggleSocialInput(!displaySocialInput)}
            type='button'
            className='btn btn-secondary'
          >
            افزودن شبکه‌های اجتماعی
          </button>
        </div>
        {displaySocialInput && (
          <>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x' />
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x' />
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x' />
              <input
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={youtube}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x' />
              <input
                type='text'
                placeholder='Linkedin URL'
                name='linkedin'
                value={linkedin}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x' />
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={e => onChange(e)}
              />
            </div>
          </>
        )}

        <input type='submit' className='btn btn-primary my-1' />
        <a className='btn btn-light my-1' href='dashboard.html'>
          بازگشت
        </a>
      </form>
    </>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(
  null,
  { createProfile }
)(withRouter(CreateProfile));
