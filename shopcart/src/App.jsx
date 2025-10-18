import React from 'react';
import Cart from './Components/Cart';
import ProductList from './Components/ProductList';

function App() {
  return (
    <div>
      <nav style={{
        background: '#16BA9C',
        color: 'white',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <h2>Redux Shop</h2>
        <Cart />
      </nav>
      <ProductList />
    </div>
  );
}

export default App;