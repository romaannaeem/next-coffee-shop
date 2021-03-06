import React from 'react';
import CartSlideOut from './CartSlideOut';

export default function Hero() {
  return (
    <>
      <div className="position-relative overflow-hidden m-md-3 text-center bg-light hero">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal">Next Coffee Shop</h1>
          <p className="lead font-weight-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="btn btn-success">See all products</button>
        </div>
      </div>
      <CartSlideOut />
    </>
  );
}
