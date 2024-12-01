import React from "react";
import Layout from "../../Components/Layout/Layout";
import { basePath } from "../../basePath";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./ProductDetails.module.css";
import ProductCard from "../../Components/Product/ProductCard";

const ProductDetails = () => {
  const [product, setProduct] = useState([]); 
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${basePath}/products/${id}`)
      .then((response) => {
        setProduct(response.data); 
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setProduct(null);
      });
  }, [id]);

  return (
    <Layout>
      <div>
        <h1 style={{ padding: "30px" }}>Product Details</h1>
        <p style={{ padding: "30px" }}>{`Id: ${id}`}</p>
        <hr />
        <hr />
        <div className={styles.Product_container}>
          {product ? (
            <ProductCard product={product} />
          ) : (
            <p>Loading or Product not found...</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
