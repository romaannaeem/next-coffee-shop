import React, { createContext, useState } from 'react';

export const CartContext = createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  // const addToCart = (item) => {
  //   let tempCart = cart;
  //   tempCart.push(item);
  //   setCart(tempCart);
  // };

  const addToCart = (item) => {
    console.log(item);
    setCart((oldArray) => [...oldArray, item]);
  };

  const removeFromCart = (uniqueId) => {
    const filteredArray = cart.filter((item) => item.uniqueId !== uniqueId);

    setCart(filteredArray);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
