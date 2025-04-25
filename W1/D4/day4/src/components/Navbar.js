import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ background: '#222', padding: '1rem' }}>
      <Link to="/" style={{ color: '#fff', marginRight: '1rem' }}>Home</Link>
      <Link to="/blogs" style={{ color: '#fff', marginRight: '1rem' }}>Blogs</Link>
      <Link to="/about" style={{ color: '#fff' }}>About</Link>
    </nav>
  );
}

export default Navbar;
