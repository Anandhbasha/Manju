import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Wireless Mouse', price: 799, img: 'https://m.media-amazon.com/images/I/61LtuGzXeaL._SL1500_.jpg' },
  { id: 2, name: 'Keyboard', price: 1299, img: 'https://m.media-amazon.com/images/I/71k3bA+z8wL._SL1500_.jpg' },
  { id: 3, name: 'USB-C Cable', price: 499, img: 'https://m.media-amazon.com/images/I/71U8eX3w5mL._SL1500_.jpg' },
  { id: 4, name: 'Headphones', price: 1499, img: 'https://m.media-amazon.com/images/I/61CGHv6kmWL._SL1500_.jpg' },
];

function ProductList() {
  return (
    <div style={{
      display: 'flex',
      gap: '20px',
      padding: '20px'
    }}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductList;