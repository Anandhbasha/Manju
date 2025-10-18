import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../Slice';

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <strong>Cart: {items.reduce((total, item) => total + item.quantity, 0)}</strong>
      {items.length > 0 && (
        <div style={{
          background: 'white',
          color: 'black',
          position: 'absolute',
          right: '20px',
          top: '60px',
          width: '250px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          padding: '10px'
        }}>
          {items.map((item) => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>{item.name} ({item.quantity})</span>
              <button
                onClick={() => dispatch(removeItem(item.id))}
                style={{ background: 'red', color: 'white', border: 'none', borderRadius: '4px', padding: '2px 6px' }}
              >
                x
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;