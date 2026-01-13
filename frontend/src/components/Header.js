import React from 'react';
import '../styles/Header.css';

function Header({ onLogout }) {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div className="header">
      <div className="header-left">
        <h2>Mono Cromat & Co.</h2>
      </div>
      
      <div className="header-right">
        <span className="user-info">👤 {user.name || 'Usuario'}</span>
        <button className="logout-btn" onClick={onLogout}>
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}

export default Header;