import React,{useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./wishProduct.css";
import {
  addWishProduct,
  decreaseWishQuantity,
  removeWishProduct,
} from "../redux/wishListSlice/wishListSlice";
function CartProduct() {
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const { wishProduct } = useSelector((state) => state.wishProduct);
  const sumProductPrice = () => {
    setTotalPrice(
      wishProduct.reduce(
        (acc, curr) => acc + curr.productPrice * curr.quantity,
        0
      )
    );
  };
  useEffect(() => {
    sumProductPrice();
  }, [wishProduct]);
  return (
    <div className="container">
      <h1 className="m-3" style={{ textAlign: "center" }}>
        Wish List Product
      </h1>
      {wishProduct.length !== 0 ? (
        <div className="cartProduct">
          <div className="cartLeft">
            {wishProduct.map((item, index) => (
              <div key={index} className="card m-3" style={{ width: "500px" }}>
                <div className="cardBody d-flex m-2 " key={index}>
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
                    <p>{item.productTitle}</p>
                    <p className="quantity">
                      Quantity:{" "}
                      <button
                        disabled={item.quantity === 1}
                        onClick={() => dispatch(decreaseWishQuantity(item.id))}
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        className=""
                        onClick={() => dispatch(addWishProduct(item.id))}
                      >
                        +
                      </button>
                    </p>
                    <div className="price">
                      <span>Prices: ${item.productPrice * item.quantity}</span>
                    </div>
                  </div>
                  <div>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(removeWishProduct(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout">
            <button className="btn btn-danger">
              Total Price: ${totalPrice}
            </button>
          </div>
        </div>
      ) : (
        <h1 style={{ marginTop: "50px", textAlign: "center" }}>
          Not Product Add In the Wish List
        </h1>
      )}
    </div>
  );
}

export default CartProduct;
