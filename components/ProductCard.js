import React, { useContext } from 'react';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartContextProvider, { CartContext } from '../context/CartContext';

export default function ProductCard(props) {
  const { cart, addToCart } = useContext(CartContext);

  const addToCartNotify = () => toast(`${props.name} added to cart!`);

  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img src={`${props.imgSrc}`} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-outline-secondary">
                View
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  addToCartNotify(); // Green bar or rainbow? 🤔
                  addToCart({
                    ...props.object,
                    uniqueId: _.uniqueId('unique_'),
                  });
                }}
              >
                {/* <FontAwesomeIcon icon={faCartPlus} size="xs" />  */}Add to
                Cart
              </button>
            </div>
            <small className="text-muted">${props.price}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
