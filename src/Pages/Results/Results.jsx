import React from "react";
import { basePath } from "../../basePath";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../../Components/Product/ProductCard";
import Layout from "../../Components/Layout/Layout";
import styles from "./Results.module.css";
import Loader from "../../Components/Loader/Loader";
const Results = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${basePath}/products/category/${category}`)
      .then((response) => {
        setIsLoading(false);
        setProducts(Array.isArray(response.data) ? response.data : []);
      })
      .catch((err) => {
        setIsLoading(false);
        console.error("Error fetching products:", err);
        setProducts([]);
      });
  }, [category]);

  return (
    <Layout>
      <div>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category</p>
        <div className={styles.Product_container}>
          {isLoading ? (
            <Loader />
          ) : (
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderAdd={true}
              />
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Results;
