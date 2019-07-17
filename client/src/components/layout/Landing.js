import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = isAuthenticated => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>ایران کراست</h1>
          <p className='lead'>شبکه اجتماعی برای دوستداران سیاره زیبای زمین</p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary mb-1'>
              ثبت نام
            </Link>
            <Link to='/login' className='btn btn-light mb-1'>
              وروداعضا
            </Link>
            <Link to='/blog' className='btn btn-light mb-1'>
              ورودمهمان
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
Landing.propType = {
  isAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
