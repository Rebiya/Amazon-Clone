import React from "react";
import styles from "./Header.module.css";
import { TfiMenu } from "react-icons/tfi";
const LowerHeader = () => {
  return (
    <div className={styles.LowerHeaderWrapper}>
      <ul className={styles.links}>
        <li>
          <a href="#">
            <TfiMenu />
            All
          </a>
        </li>
        <li>
          <a href="#">Todays deals</a>
        </li>
        <li>
          <a href="#">Customer Service</a>
        </li>
        <li>
          <a href="#">Registry</a>
        </li>
        <li>
          <a href="#">Gift Cards </a>
        </li>
        <li>
          <a href="#">Sales</a>
        </li>
      </ul>
    </div>
  );
};

export default LowerHeader;
