import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className='navbar-nav'>
      <li className='nav-item'>
        <Link style={{ textDecoration: 'none' }} to='/dashboard'>
          <i className='fas fa-user'> </i>{' '}
          <span className='hide-sm'>صفحه کاربری</span>
        </Link>
      </li>
      <li className='nav-item'>
        <Link style={{ textDecoration: 'none' }} to='/blog'>
          <i className='fas fa-book'> </i> وبلاگ
        </Link>
      </li>
      <li className='nav-item'>
        <a style={{ textDecoration: 'none' }} href='#!' onClick={logout}>
          <span className='hide-sm'>خروج</span>{' '}
          <i className='fas fa-sign-out-alt'> </i>
        </a>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul className='navbar-nav'>
      <li className='nav-item'>
        <Link style={{ textDecoration: 'none' }} to='#'>
          اعضا
        </Link>
      </li>
      <li className='nav-item'>
        <Link style={{ textDecoration: 'none' }} to='/register'>
          ثبت نام
        </Link>
      </li>
      <li className='nav-item'>
        <Link style={{ textDecoration: 'none' }} to='/login'>
          وروداعضا
        </Link>
      </li>
      <li className='nav-item'>
        <Link style={{ textDecoration: 'none' }} to='/blog'>
          <i className='fas fa-book'> </i> وبلاگ
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
      <Link className='navbar-brand' style={{ textDecoration: 'none' }} to='/'>
        <i className='fas fa-globe-americas fa-spin' /> IranCrust
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarNav' />
      {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
