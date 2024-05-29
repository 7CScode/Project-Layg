// HomePage.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cart/cartSlice';
import Navbar from './Navbar'; // Import Navbar component

const items = [
  { id: 1, name: 'Item 1', description: 'Description of Item 1' },
  { id: 2, name: 'Item 2', description: 'Description of Item 2' },
  { id: 3, name: 'Item 3', description: 'Description of Item 3' },
  { id: 4, name: 'Item 4', description: 'Description of Item 4' },
  { id: 5, name: 'Item 5', description: 'Description of Item 5' },
  { id: 6, name: 'Item 6', description: 'Description of Item 6' },
  { id: 7, name: 'Item 7', description: 'Description of Item 7' },
  { id: 8, name: 'Item 8', description: 'Description of Item 8' },
  { id: 9, name: 'Item 9', description: 'Description of Item 9' },
  { id: 10, name: 'Item 10', description: 'Description of Item 10' },
];

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <h2 style={styles.title}>Home Page</h2>
        <div className="item-list" style={styles.itemList}>
          {items.map((item) => (
            <div key={item.id} style={styles.itemCard}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <button style={styles.addButton} onClick={() => dispatch(addItemToCart(item))}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

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
  itemList: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  itemCard: {
    width: '200px',
    padding: '20px',
    margin: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};
