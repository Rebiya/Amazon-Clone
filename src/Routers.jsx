import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landing/Landing";
import AuthPage from "./Pages/Auth/Auth";
import OrdersPage from "./Pages/Orders/Orders";
import PaymentPage from "./Pages/Payment/Payment";
import CartPage from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "  pk_test_51QTVpPA3g8fQRAS3vKHatPJBiP7avo3wdXeTS417I8eXaxIzevZYFIwMZUcheDTzoEVZvdo5HgX9Go5J4OnHuigw003BMQpUEt"
);
const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={stripePromise}>
              <PaymentPage />
            </Elements>
          }
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/Category/:category" element={<Results />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default Routers;
