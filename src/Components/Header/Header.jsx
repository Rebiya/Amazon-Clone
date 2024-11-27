import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import styles from "./Header.module.css";
import { Form, Row, Col, Container } from "react-bootstrap";
import img from "../../assets/images/10001.jpg";
const Header = () => {
  return (
    <Container fluid>
      <div className={styles.Header_Wrapper}>
        {/* Logo Section */}
        <div className={styles.right_wrapper}>
          <a href="#">
            <div className={styles.logo}>
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                alt="amazon"
              />
            </div>
          </a>
          {/* Location Section */}
          <a href="#">
            <div className={styles.location}>
              <SlLocationPin />
              <div>
                <p className={styles.deliveredTo}>Delivered to</p>
                <span className={styles.country}>Ethiopia</span>
              </div>
            </div>
          </a>
        </div>

        {/* Search and Menu Section */}

        {/* <MdOutlineMenu className={styles.icon} /> */}

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
          <a href="#" className={styles.language}>
            <img className={styles.flag} src={img} alt="flag" />
            <select name="" id="" className={styles.EN}>
              <option value="EN">EN</option>
            </select>
          </a>
          <a href="#" className="signin">
            <p>sign in</p>
            <span>Account & Links</span>
          </a>
          <a href="#">
            <p>sales</p>
            <span>&Orders</span>
          </a>
          <a href="#">
            <div>
              <p className={styles.count}>0</p>
              <BsCart className={styles.cart} />
            </div>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Header;
