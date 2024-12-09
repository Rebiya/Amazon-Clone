import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styles from "./Product.module.css"; // Add CSS styles if needed

const Product = () => {
  const [products, setProducts] = useState([]); // Updated to use camelCase for consistency

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className={styles.Product_container}>
      {products.map((singleProduct) => (
        <ProductCard
          key={singleProduct.id}
          product={singleProduct}
          renderAdd={true}
        />
      ))}
    </div>
  );
};

export default Product;
