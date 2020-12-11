import React, { useContext } from 'react';
import CartContextProvider, { CartContext } from '../context/CartContext';

export default function ProductCard(props) {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img src={`${props.imgSrc}`} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => {
                  addToCart(props.object);
                  console.log(cart);
                }}
              >
                Add to Cart
              </button>
            </div>
            <small className="text-muted">${props.price}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
