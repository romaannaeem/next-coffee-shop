import React, { useContext, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { CartContext } from '../context/CartContext';
import Header from '../components/Header';
import { STRIPE_PUBLIC_TEST_KEY } from '../keys';

export default function checkout() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  }, []);

  const calculateTotal = () => {
    let total = 0;

    cart.map((cartItem) => {
      total += cartItem.price;
    });

    return total.toFixed(2);
  };

  const handleToken = (token, addresses) => {
    console.log(token, addresses);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="py-5 text-center">
          <h2>Checkout</h2>
          <p className="lead">
            Use the form below to check out and receive your product(s)!
          </p>
        </div>

        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">
                {cart.length}
              </span>
            </h4>

            {cart.length === 0 ? (
              <p className="empty-cart-msg" style={{ textAlign: 'left' }}>
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

            <form className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-secondary">
                    Redeem
                  </button>
                </div>
              </div>
            </form>

            <h4 className="mb-3" style={{ paddingTop: '12%' }}>
              Payment
            </h4>
            <StripeCheckout
              stripeKey={STRIPE_PUBLIC_TEST_KEY}
              token={handleToken}
              billingAddress
              shippingAddress
              amount={calculateTotal() * 100}
              name="Your item(s)"
            >
              <button className="btn btn-primary btn-lg btn-block">
                Check out with Stripe
              </button>
            </StripeCheckout>
          </div>
          <div className="col-md-8 order-md-2"></div>
        </div>
      </div>
    </>
  );
}
