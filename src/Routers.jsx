import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from "./Pages/Landing/Landing";
import SignUpPage from "./Pages/Auth/SignUp";
import OrdersPage from "./Pages/Orders/Orders";
import PaymentPage from "./Pages/Payment/Payment";
import CartPage from "./Pages/Cart/Cart";
const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<SignUpPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default Routers;
