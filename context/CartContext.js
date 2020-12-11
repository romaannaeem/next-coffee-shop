import React, { createContext, useState } from 'react';

export const CartContext = createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    let tempCart = cart;
    tempCart.push(item);
    setCart(tempCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
