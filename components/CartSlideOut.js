import React, { useContext, useState, useEffect } from 'react';
import CartContextProvider, { CartContext } from '../context/CartContext';

export default function SlideOut() {
  let { cart, addToCart } = useContext(CartContext);

  const calculateTotal = () => {
    let total = 0;

    cart.map((cartItem) => {
      total += cartItem.price;
    });

    return total;
  };

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
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-muted">Your cart</span>
              <span class="badge badge-secondary badge-pill">
                {cart.length}
              </span>
            </h4>
            {/* <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button> */}
          </div>
          <div className="modal-body">
            {cart.length === 0 ? (
              <p className="empty-cart-msg">
                There's nothing here! Add something to your cart and come back
                :)
              </p>
            ) : (
              <ul class="list-group mb-3">
                {cart.map((cartItem) => (
                  <li
                    class="list-group-item d-flex justify-content-between lh-condensed"
                    key={cartItem.id}
                  >
                    <div>
                      <h6 class="my-0">{cartItem.name}</h6>
                      <small class="text-muted">Brief Description</small>
                    </div>
                    <span class="text-muted">${cartItem.price}</span>
                    <span class="text-muted">x</span>
                  </li>
                ))}
                <li class="list-group-item d-flex justify-content-between">
                  <span>Total</span>
                  <strong>${calculateTotal()}</strong>
                </li>
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
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
