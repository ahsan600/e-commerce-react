import React, { useRef, useState } from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { cartProduct } = useSelector((state) => state.cartProduct);
  const { wishProduct } = useSelector((state) => state.wishProduct);
  const navigate = useNavigate();

  return (
    <div className="header-style">
      <div className="header-right">
        <h1>EpicBazaar</h1>
      </div>
      <div className="header-left">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          {localStorage.getItem("auth") && (
            <>
              <li className="">
                <div onClick={() => navigate("/cartproduct")}>
                  <i className="m-2 fa-solid fa-cart-shopping">
                    {cartProduct.length > 0 && (
                      <span className="position-absolute top-1 translate-middle badge rounded-pill bg-danger">
                        {cartProduct.length}
                      </span>
                    )}
                  </i>
                </div>
              </li>
              <li>
                <i
                  className="fa-solid fa-heart"
                  onClick={() => navigate("/wishproduct")}
                >
                  {wishProduct.length > 0 && (
                    <span className="position-absolute top-1 translate-middle badge rounded-pill bg-danger">
                      {wishProduct.length}
                    </span>
                  )}
                </i>
              </li>
            </>
          )}
          {localStorage.getItem("auth") ? (
            <li>
              <Link to="/login" onClick={() => localStorage.removeItem("auth")}>
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
