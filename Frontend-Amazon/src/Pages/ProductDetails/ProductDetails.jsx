import React from "react";
import Layout from "../../Components/Layout/Layout";
import { basePath } from "../../basePath";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./ProductDetails.module.css";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${basePath}/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setProduct(null);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <Layout>
      <div className={styles.Detail}>
        <h1 style={{ padding: "30px" }}>Product Details</h1>
        <p style={{ padding: "30px" }}>{`Id: ${id}`}</p>
        <hr />
        <hr />
        <div className={styles.Product_container}>
          {isLoading ? (
            <Loader />
          ) : (
            <ProductCard
              product={product}
              flex={true}
              renderDesc={true}
              renderAdd={true}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
