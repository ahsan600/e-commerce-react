import CartProduct from "./Components/CartProduct/CartProduct";
import Header from "./Components/Header/Header";
import Products from "./Components/Product/Products/Products";
import SelectProduct from "./Components/SelectProduct/SelectProduct";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import WishProduct from "./Components/WishProduct/WishProduct";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { useEffect } from "react";
import ProtectedRoute from "./Components/ProtectedRoute";
import Page404 from "./Components/Page404";
import Home from "./Components/HomePage/Home";
import ForgetPassword from "./Components/Forget/ForgetPassword";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
function App() {
  useEffect(() => {});
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          ></Route>
          <Route path="/shop" element={<Products />} />
          <Route path="/forgetpassword" element={<ForgetPassword/>} />
          <Route path="/resetpassword" element={<ResetPassword/>} />
          <Route path="*" element={<Page404 />} />
          <Route path="/product" element={<SelectProduct />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/cartproduct" element={<CartProduct />} />
            <Route path="/wishproduct" element={<WishProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
