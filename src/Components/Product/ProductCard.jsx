import React, { useContext } from "react";
import styles from "./Product.module.css";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import Currency from "./Currency";
import { DataContext } from "../DataProvider/DataProvider";
import { type } from "../../Utility/action.type";

const ProductCard = ({ product, flex, renderDesc, renderAdd }) => {
  const { title, image, rating, price, category, id, description } = product;
  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description
      }
    });
  };

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
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <h3>{title}</h3>
        <div className={styles.rating}>
          <Rating value={rating?.rate || 0} precision={0.1} />
          <small>{rating?.count || 0} </small>
        </div>
        <div>
          <Currency amount={price} />
        </div>
        {renderAdd && (
          <button className={styles.button} onClick={addToCart}>
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
