import React from 'react';
import Link from 'next/Link';

export default function Header(props) {
  return (
    <>
      {props.home ? (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm sticky-top">
          <h5 className="my-0 mr-md-auto font-weight-normal">
            Next Coffee Shop
          </h5>
          <nav className="my-2 my-md-0 mr-md-3">
            <a className="p-2 text-dark" href="#">
              Home
            </a>
            <a className="p-2 text-dark" href="#">
              Products
            </a>
          </nav>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#slideOut"
          >
            Cart
          </button>
        </div>
      ) : (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm sticky-top">
          <Link href="/">
            <h5
              className="my-0 mr-md-auto font-weight-normal"
              style={{ cursor: 'pointer' }}
            >
              Next Coffee Shop
            </h5>
          </Link>
          <nav className="my-2 my-md-0 mr-md-3"></nav>
        </div>
      )}
    </>
  );
}
