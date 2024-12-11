import React, { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { Form, Row, Col, Container } from "react-bootstrap";
import img from "../../assets/images/10001.jpg";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";
const Header = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  //  console.log(basket.length);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <div className={styles.Header_Wrapper}>
      {/* Logo Section */}
      <div className={styles.right_wrapper}>
        <Link to="/">
          <div className={styles.logo}>
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
              alt="amazon"
            />
          </div>
        </Link>
        {/* Location Section */}
        <Link to="/payment">
          <div className={styles.location}>
            <SlLocationPin />
            <div>
              <p className={styles.deliveredTo}>Delivered to</p>
              <span className={styles.country}>Ethiopia</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Search and Menu Section */}
      <div className={styles.middleWrapper}>
        <select name="item" id="" className={styles.AllItem}>
          <option value="">All</option>
        </select>
        <Form>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Search product"
            className={styles.searchInput}
          />
        </Form>
        <div className={styles.IoSearch}>
          <IoSearch className={styles.icon} />
        </div>
      </div>
      {/* cart section */}
      <div className={styles.leftWrapper}>
        <Link to="#" className={styles.language}>
          <img className={styles.flag} src={img} alt="flag" />
          <select name="" id="" className={styles.EN}>
            <option value="EN">EN</option>
          </select>
        </Link>
        <Link to={!user ? "/auth" : ""} className="signin">
          {user ? (
            <>
              <p style={{ fontSize: "0.75rem" }}>
                {"Hello " + user?.email?.split("@")[0]}
              </p>
              <span onClick={() => auth.signOut()}>sign out</span>
            </>
          ) : (
            <>
              <p>signin</p>
              <span>Account & Links</span>
            </>
          )}
        </Link>
        <Link to="/orders">
          <p>sales</p>
          <span>&Orders</span>
        </Link>
        <Link to="/cart">
          <div clas>
            <p className={styles.count}>{basket.length}</p>
            <BsCart className={styles.cart} />
            <span>cart</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
