import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Register() {
  const [file, setFile] = useState(null);
  const handleImage = (e) => {
    setFile(e.target.files[0]);
  };
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({ mode: "all" });
  const onSubmit = async (data) => {
    data = { ...data, file };
    try {
      const response = await axios.post("/api/auth/register", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success(response.data);
      reset();
    } catch (error) {
      if (error.response && error.response.data) {
        console.log("hi");
        toast.error(error.response.data);
      } else {
        console.log("An unexpected error occurred:", error);
      }
    }
  };

  return (
    <div>
      <section className="gradient-form" style={{ backgroundColor: "#eee" }}>
        <div className="container py-3 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src="https://img.freepik.com/free-vector/cartoon-style-cafe-front-shop-view_134830-697.jpg?w=1380&t=st=1717412241~exp=1717412841~hmac=c851548e1e88352fa0ec52213322cc117e57870a80dc97ee865777a3cd280d74"
                          style={{ width: "185px" }}
                          alt="logo"
                        />
                        <h3 className="mt-1 mb-5 pb-1">Create Your Account</h3>
                      </div>

                      <form onSubmit={handleSubmit(onSubmit)}>
                        <ToastContainer />
                        <label htmlFor="username">Username</label>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="username"
                            name="username"
                            className="form-control"
                            placeholder="Enter Username"
                            {...register("username", {
                              required: "Username is Required",
                            })}
                          />
                          {errors.username && (
                            <p style={{ color: "red" }}>
                              {errors.username.message}
                            </p>
                          )}
                        </div>
                        <label htmlFor="email">Email</label>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter Email address"
                            {...register("email", {
                              required: "Email is Required",
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid Email Address",
                              },
                            })}
                          />
                          {errors.email && (
                            <p style={{ color: "red" }}>
                              {errors.email.message}
                            </p>
                          )}
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                          <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            placeholder="********"
                            {...register("password", {
                              required: {
                                value: true,
                                message: "Password is Required",
                              },
                              pattern: {
                                value:
                                  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                                message:
                                  "Password must be at least 8 characters long",
                              },
                            })}
                          />
                          {errors.password && (
                            <p style={{ color: "red" }}>
                              {errors.password.message}
                            </p>
                          )}
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="cpassword">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            id="cpassword"
                            name="cpassword"
                            className="form-control"
                            placeholder="********"
                            {...register("cpassword", {
                              required: "Confrim Password is Required",
                              validate: (val) =>
                                val === getValues("password") ||
                                "Password Doesn't Match",
                            })}
                          />
                          {errors.cpassword && (
                            <p style={{ color: "red" }}>
                              {errors.cpassword.message}
                            </p>
                          )}
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="file">
                            Upload Image
                          </label>
                          <input
                            type="file"
                            id="file"
                            name="file"
                            className="form-control"
                            onChange={handleImage}
                          />
                        </div>
                        <div className="text-center pt-1 mb-5 pb-1">
                          <button className="btn btn-primary" type="submit">
                            Register
                          </button>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">You have an account?</p>
                          <Link
                            type="button"
                            className="btn btn-outline-danger"
                            to="/login"
                          >
                            Login
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="d-flex justify-content-center align-item-center w-100">
                      <img
                        style={{
                          objectFit: "contain",
                          height: "400px",
                          width: "350px",
                        }}
                        src="https://img.freepik.com/free-vector/cartoon-style-cafe-front-shop-view_134830-697.jpg?w=1380&t=st=1717412241~exp=1717412841~hmac=c851548e1e88352fa0ec52213322cc117e57870a80dc97ee865777a3cd280d74"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
