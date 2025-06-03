import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="site-header">
      <div className="header-content">
        <div className="logo" onClick={() => navigate('/')}>
          AstroScience
        </div>
        <nav className="menu">
          {!isActive('/') && (
            <button onClick={() => navigate('/')}>Главная</button>
          )}
          {!isActive('/topics') && (
            <button onClick={() => navigate('/topics')}>Темы</button>
          )}
          {!isActive('/contact') && (
            <button onClick={() => navigate('/contact')}>Контакты</button>
          )}
          {!isActive('/about') && (
            <button onClick={() => navigate('/about')}>О нас</button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
