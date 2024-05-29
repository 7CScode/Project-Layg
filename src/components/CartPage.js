// CartPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../features/cart/CartItem';

const CartPage = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Shopping Cart</h2>
      {items.length === 0 ? (
        <p style={styles.emptyCart}>Your cart is empty</p>
      ) : (
        <div className="cart-items" style={styles.cartItems}>
          {items.map((item) => (
            <div key={item.id} style={styles.card}>
              <CartItem item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  emptyCart: {
    textAlign: 'center',
    fontSize: '20px',
    color: '#888',
  },
  cartItems: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};
