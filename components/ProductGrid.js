import React from 'react';
import ProductCard from '../components/ProductCard';
import productData from '../products.json';

// TODO: Split grid into product subcomponents

export default function ProductGrid(props) {
  return (
    <div className="container" style={props.style}>
      <div className="row">
        {productData.products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              name={product.name}
              imgSrc={product.image}
              description={product.description}
              price={product.price}
              object={product}
            />
          );
        })}
      </div>
    </div>
  );
}
