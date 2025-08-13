import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ cartCount }) {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Sastika's Market Place
        </Link>
      </h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Home
        </Link>
        <Link to="/cart" className="cart">
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
