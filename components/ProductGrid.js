import React from 'react';
import Product from '../components/Product';

// TODO: Split grid into product subcomponents

export default function ProductGrid() {
  return (
    <div class="container">
      <div class="row">
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
