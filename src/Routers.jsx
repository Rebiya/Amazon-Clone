import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from "./Pages/Landing/Landing";
import SignUpPage from "./Pages/Auth/SignUp";
import OrdersPage from "./Pages/Orders/Orders";
import PaymentPage from "./Pages/Payment/Payment";
import CartPage from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results"
import ProductDetails from "./Pages/ProductDetails/ProductDetails"
const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<SignUpPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/Category/:category" element={<Results />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default Routers;
