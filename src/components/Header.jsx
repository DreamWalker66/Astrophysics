import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="site-header">
      <div className="header-content">
        <h1 className="logo" onClick={() => navigate('/')}>AstroScience</h1>
        <nav>
          <button onClick={() => navigate('/')}>Главная</button>
          <button onClick={() => navigate('/topics')}>Темы</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
