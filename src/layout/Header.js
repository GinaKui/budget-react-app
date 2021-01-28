import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <NavLink className="header__title" to="/dashboard">
            <h1>EZ Budget</h1>
          </NavLink>
          <button className="button button--link" onClick={handleLogout}>Logout</button>
        </div>
      </div>   
    </header>
  );
};

export default Header;