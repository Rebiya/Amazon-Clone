import React from "react";
import { basePath } from "../../basePath";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../../Components/Product/ProductCard";
import Layout from "../../Components/Layout/Layout";
import styles from "./Results.module.css";
const Results = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    axios
      .get(`${basePath}/${category}`)
      .then((response) => {
        setProducts(Array.isArray(response.data) ? response.data : []);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setProducts([]);
      });
  }, [category]);

  return (
    <Layout>
      <div>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category</p>
        <hr />
        <hr />
        <div className={styles.Product_container}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Results;
