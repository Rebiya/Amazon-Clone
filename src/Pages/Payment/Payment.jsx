import React, { useState, useContext } from "react";
import classes from "./Payment.module.css";
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/Product/Currency";
import { axiosInstance } from "../../API/Axios";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { type } from "../../Utility/action.type";
import { db } from "../../Utility/firebase";

function Payment() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  // console.log(" user from reducer state"+ user.uid);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const handleChange = (e) => {
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      setProcessing(true);

      //1.  backend || function ---> contact to the client secret
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`
      });
      // console.log("response from axios URL " + response); //this will return client secrete
      const clientSecret = response.data?.clientSecret;
      // console.log("Client secrete number coming from backend" + clientSecret);

      // 2 client side confirmation
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      });
      // console.log("payment intent", paymentIntent);

      //3 after confirmation order fire store database save and clean basket

      // after get conformation to store in firestore databse to save, clear basket after check out
      await db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created
        });

      // to empty basket
      dispatch({ type: type.EMPTY_BASKET });

      setProcessing(false);
      navigate("/orders", { state: { msg: "you have placed new order" } });
    } catch (error) {
      console.log(error);
      setProcessing(false);
    }
  };

  return (
    <Layout>
      <div>
        {/* Checkout header */}
        <div className={classes.payment_header}>
          Checkout ({totalItem}) items
        </div>

        {/* payment Method */}
        <section className={classes.payment}>
          <div className={classes.flex}>
            {/* {Delivery Address} */}
            <h3>Delivery Address</h3>
            <div className={classes.deliver}>
              <div>{user?.email}</div>
              <div>Ethiopia</div>
              <div>Addis Ababa, Legihar</div>
            </div>
          </div>
          <hr />

          {/* Product Review */}
          <div className={classes.flex}>
            <h3>Review items and delivery</h3>
            <div>
              {basket?.map((item, i) => (
                <ProductCard key={i} product={item} flex={true} />
              ))}
            </div>
          </div>
          <hr />

          {/* Payment form */}
          <div className={classes.flex}>
            <h3>Payment Method</h3>
            <div className={classes.payment_card_container}>
              <div className={classes.payment_details}>
                <form onSubmit={handlePayment}>
                  {/* {error} */}
                  {cardError && (
                    <small style={{ color: "red" }}>{cardError}</small>
                  )}
                  {/* {card Element} */}
                  <CardElement onChange={handleChange} />
                  {/* {price} */}
                  <div className={classes.payment_price}>
                    <div>
                      <span style={{ display: "flex", gap: "12px" }}>
                        <p>Total Order |</p> <CurrencyFormat amount={total} />
                      </span>
                    </div>

                    {/* Submit Button */}
                    <button type="submit">
                      {processing ? (
                        <div className={classes.loading}>
                          <ClipLoader color="gray" size={12} />
                          <p>Please wait ...</p>
                        </div>
                      ) : (
                        "Pay Now"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Payment;
