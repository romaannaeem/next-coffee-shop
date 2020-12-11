import React, { useContext } from 'react';
import CartContextProvider, { CartContext } from '../context/CartContext';

export default function AddToCart() {
  const { cart, addToCart } = useContext(CartContext);

  console.log(cart);

  return (
    <button
      onClick={() => {
        addToCart({ id: 1 });
        console.log(cart);
      }}
    >
      Add to Cart
    </button>
  );
}
