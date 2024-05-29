// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const itemsInCart = useSelector((state) => state.cart.items);

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/home" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/cart" style={styles.navLink}>Cart ({itemsInCart.length})</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px 0',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  navItem: {
    marginRight: '20px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
};
