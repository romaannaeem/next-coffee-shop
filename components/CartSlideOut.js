import React, { useContext, useState, useEffect } from 'react';
import CartContextProvider, { CartContext } from '../context/CartContext';

export default function SlideOut() {
  let { cart, addToCart } = useContext(CartContext);

  return (
    <div
      className="modal fade"
      id="slideOut"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="slideOutLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-slideout modal-sm"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="slideOutLabel">
              Your Cart
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            {cart.length === 0 ? (
              <p className="empty-cart-msg">
                There's nothing here! Add something to your cart and come back
                :)
              </p>
            ) : (
              <ul>
                {cart.map((cartItem) => (
                  <li key={cartItem.id}>{cartItem.name}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
