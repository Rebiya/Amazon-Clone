import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landing/Landing";
import AuthPage from "./Pages/Auth/Auth";
import OrdersPage from "./Pages/Orders/Orders";
import Payment from "./Pages/Payment/Payment";
import CartPage from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
const stripePromise = loadStripe(
  "pk_test_51QTVpPA3g8fQRAS3vKHatPJBiP7avo3wdXeTS417I8eXaxIzevZYFIwMZUcheDTzoEVZvdo5HgX9Go5J4OnHuigw003BMQpUEt"
);

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"you must log in to  access your orders "}
              redirect={"/orders"}
            >
              <OrdersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoute
              msg={"you must log in to pay "}
              redirect={"/payment"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        s
        <Route path="/cart" element={<CartPage />} />
        <Route path="/Category/:category" element={<Results />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default Routers;
