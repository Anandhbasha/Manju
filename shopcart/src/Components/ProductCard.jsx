import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../Slice';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      textAlign: 'center',
      padding: '15px',
      transition: '0.3s',
      backgroundColor: '#fff'
    }}>
      <img
        src={product.img}
        alt={product.name}
        style={{ width: '100%', height: '150px', objectFit: 'contain' }}
      />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button
        onClick={() => dispatch(addItem(product))}
        style={{
          background: '#16BA9C',
          color: 'white',
          border: 'none',
          padding: '8px 15px',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;