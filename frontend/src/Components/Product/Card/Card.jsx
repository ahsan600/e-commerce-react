import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
import { selectProduct } from "../../redux/selectProductSlice/selectProductSlice";
import { useDispatch } from "react-redux";

function Card({ productTitle, productImages, productPrice, discount, id }) {
  const dispatch = useDispatch();
  return (
    <Link to="/product">
      <div
        className="product"
        onClick={() => {
          dispatch(selectProduct(id));
        }}
      >
        {discount && (
          <div className="discount">
            <span className="badge badge-danger">{discount}</span>
          </div>
        )}
        <div className="product-top">
          <div className="product-title">
            <p>{productTitle}</p>
          </div>
          <div className="product-price">
            <p>Price: ${productPrice}</p>
          </div>
        </div>
        <div className="product-center">
          <img src={productImages} alt="" />
        </div>
        <div className="product-bottom">
          <button className="btn btn-danger">Buy Now</button>
          <div className="icon">
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-solid fa-heart"></i>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
