import React from 'react';

export default function Header() {
  return (
    <>
      <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 class="my-0 mr-md-auto font-weight-normal">Next Coffee Shop</h5>
        <nav class="my-2 my-md-0 mr-md-3">
          <a class="p-2 text-dark" href="#">
            Home
          </a>
          <a class="p-2 text-dark" href="#">
            Products
          </a>
        </nav>
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal1"
        >
          See Cart
        </button>
      </div>
    </>
  );
}
