import React, { useContext, useState, useEffect } from 'react';
import CartContextProvider, { CartContext } from '../context/CartContext';
import Link from 'next/link';

export default function SlideOut() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const calculateTotal = () => {
    let total = 0;

    cart.map((cartItem) => {
      total += cartItem.price;
    });

    return total.toFixed(2);
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
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">
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
              <ul className="list-group mb-3">
                {cart.map((cartItem) => (
                  <li
                    className="list-group-item d-flex justify-content-between lh-condensed"
                    key={cartItem.uniqueId}
                  >
                    <div>
                      <h6 className="my-0">{cartItem.name}</h6>
                      <small className="text-muted">
                        {cartItem.shortDescription}
                      </small>
                    </div>
                    <span className="text-muted">${cartItem.price}</span>
                    <span
                      className="text-muted remove-from-cart"
                      onClick={() => removeFromCart(cartItem.uniqueId)}
                    >
                      x
                    </span>
                  </li>
                ))}
                <li className="list-group-item d-flex justify-content-between">
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
            <Link href="/checkout">
              <button type="button" className="btn btn-primary">
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
