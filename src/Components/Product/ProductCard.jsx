import React from "react";
import styles from "./Product.module.css";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import Currency from "./Currency";
const ProductCard = ({ product, flex, renderDesc }) => {
  const { title, image, rating, price, category, id, description } = product;
  console.log(product);

  return (
    <div
      className={`${styles.card_container} ${
        flex ? styles.product_flexed : ""
      }`}
    >
      <div>
        <Link to={`/products/${id}`}>
          <img src={image} alt={category} />
        </Link>
      </div>
      <div>
        {renderDesc && <div style={{ maxWidth: "500px" }}>{description}</div>}
        <h3>{title}</h3>
        <div className={styles.rating}>
          <Rating value={rating?.rate || 0} precision={0.1} />
          <small>{rating?.count || 0} </small>
        </div>

        <div>
          <Currency amount={price} />
        </div>

        <button className={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;