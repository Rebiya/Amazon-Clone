import React, { useContext, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import styles from "./Payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Currency from "../../Components/Product/Currency";
const Payment = () => {
  const [{ basket, user }] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const total = basket.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );

  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(null);

  const handleChange = (e) => {
    console.log(e);
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };

  return (
    <Layout>
      {/* header ,total item is read dynamically form the useContext*/}
      <div className={styles.payment_header}>Checkout({totalItem})items</div>
      {/* payment method */}
      <section className={styles.Payment}>
        {/* address  */}
        <div className={styles.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>chicago, IL</div>
          </div>
        </div>
        <hr />
        {/* product */}
        <div className={styles.flex}>
          <h3>Review Items and Delivery</h3>
          <div>
            {basket?.map((item, i) => (
              <ProductCard key={i} product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* card  form  */}
        <div className={styles.flex}>
          <h3>Payment methods</h3>
          <div className={styles.payment_card_container}>
            <div className={styles.payment_details}>
              {/* error displaying */}
              <form action="#">
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* card element */}
                <CardElement onChange={handleChange} />
              </form>
              {/* price */}
              <div className={styles.payment_price}>
                <div>
                  <span style={{ display: "flex", gap: "10px" }}>
                    <p>Total Order |</p>
                    <Currency amount={total} />{" "}
                  </span>
                </div>
                <button>Pay Now</button> 
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payment;
