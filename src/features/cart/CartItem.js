import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeItemFromCart, increaseQuantity, decreaseQuantity } from './cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  if (!item) {
    return null; // Prevent rendering if item is undefined
  }

  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => dispatch(increaseQuantity(item))}>+</button>
      <button onClick={() => dispatch(decreaseQuantity(item))}>-</button>
      <button onClick={() => dispatch(removeItemFromCart(item))}>Remove</button>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
