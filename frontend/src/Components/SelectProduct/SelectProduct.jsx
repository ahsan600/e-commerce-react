import React from "react";
import "./selectProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../redux/cartProductSlice/cartProductSlice";
import { addWishProduct } from "../redux/wishListSlice/wishListSlice";

function SelectProduct() {
  const { selectProduct } = useSelector((state) => state.selectProduct);
  const navigate=useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      {selectProduct.length !== 0 ? (
        <div className="container">
          <div className="selectProduct">
            <div className="select-left">
              <img style={{mixBlendMode: "multiply"}} src={selectProduct.productImages[0]} alt="" />
            </div>
            <div className="select-right">
              <div className="title">
                <h4>{selectProduct.productTitle}</h4>
              </div>
              <div className="review">
                <span>
                  4 review: <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </span>
              </div>
              <div className="desc ">
                <p>{selectProduct.productDescription}</p>
              </div>
              <div className="desc ">
                <h4>Price: ${selectProduct.productPrice}</h4>
              </div>
              <div className="m-3">
                <h6>Available Sizes</h6>
                <div className="sizeStyle">
                  {selectProduct.productSizes.map((result, index) => (
                    <p key={index} className="size">
                      {result.size}
                    </p>
                  ))}
                </div>
              </div>
              <div className="colorStyle">
                <h6>Available Color</h6>
                <div className="d-flex">
                  {selectProduct.productsColors.map((result, index) => (
                    <div
                      key={index}
                      className="color m-1"
                      style={{ backgroundColor: result.productColor }}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="checkoutBtn">
                <button className="btn btn-secondary" onClick={()=>{
                  dispatch(addProduct(selectProduct.id));
                  navigate("/cartproduct")
                }}>CheckOut</button>
              </div>
              <div className="checkoutBtn">
                <button
                  className="btn btn-secondary"
                  onClick={() => dispatch(addProduct(selectProduct.id))}
                >
                  Add to Cart
                </button>
              </div>
              <div className="checkoutBtn">
                <button
                  className="btn btn-secondary"
                  onClick={() => dispatch(addWishProduct(selectProduct.id))}
                >
                  Add To WishList
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/" replace={true} />
      )}
    </>
  );
}

export default SelectProduct;
