import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  decreaseQuantity,
  removeProduct,
} from "../redux/cartProductSlice/cartProductSlice";
import "./cartProduct.css";
function CartProduct() {
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const ref = useRef(null);
  const { cartProduct } = useSelector((state) => state.cartProduct);
  const sumProductPrice = () => {
    setTotalPrice(
      cartProduct.reduce(
        (acc, item) => acc + (item.productPrice * item.quantity),
        0
      )
    );
  };
  useEffect(() => {
    sumProductPrice();
  }, [cartProduct]);
  return (
    <div className="container">
      <h1 className="m-3" style={{ textAlign: "center" }}>
        Cart Product
      </h1>
      {cartProduct.length !== 0 ? (
        <div className="cartProduct">
          <div className="cartLeft">
            {cartProduct.map((item, index) => (
              <div key={index} className="card m-3" style={{ width: "500px" }}>
                <div className="cardBody d-flex m-2 ">
                  <div className="card-img">
                    <img
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "contain",
                      }}
                      src={item.productImages[0]}
                      alt=""
                    />
                  </div>
                  <div className="card-desc">
                    <p >{item.productTitle}</p>
                    <p className="quantity">
                      <span style={{ fontWeight: "bold" }}>Quantity: </span>
                      <button
                        disabled={item.quantity === 1}
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                      >
                        -
                      </button>
                      {item.quantity}

                      <button
                        className=""
                        onClick={() => dispatch(addProduct(item.id))}
                      >
                        +
                      </button>
                    </p>
                    <div className="price">
                      <span>
                        <span style={{ fontWeight: "bold" }}>Prices: </span>
                        <span style={{ color: "red" }}>
                          ${item.productPrice * item.quantity}
                        </span>
                      </span>
                    </div>
                  </div>

                  <div>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(removeProduct(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout flex-column">
            {/* <span className="totalPrice">Total Price: ${totalPrice}</span> */}
            <button className="btn btn-danger">
              Total Price: ${totalPrice}
            </button>
          </div>
        </div>
      ) : (
        <h1 style={{ marginTop: "50px", textAlign: "center" }}>
          Not Product Add In the Cart
        </h1>
      )}
    </div>
  );
}

export default CartProduct;
