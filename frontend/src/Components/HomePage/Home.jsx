import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div
      style={{ height: "80vh" }}
      className="w-100 container d-flex justify-content-center align-items-center"
    >
      <div className="">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h4 className="display-5 fw-bold lh-1 mb-3">
              Discover the Best Deals at EpicBazaar - Your Ultimate Shopping
              Destination
            </h4>
            <p className="lead">
              Welcome to EpicBazaar - your ultimate shopping destination!
              Explore a curated collection of top-quality products, from fashion
              to electronics, all in one place. Discover unbeatable deals and
              elevate your shopping experience with EpicBazaar.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-danger btn-lg px-4 me-md-2"
                onClick={() => navigate("/shop")}
              >
                Shop
              </button>
              {!localStorage.getItem("auth") && (
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
