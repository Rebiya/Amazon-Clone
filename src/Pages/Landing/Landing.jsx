import React from "react";
import Layout from "../../Components/Layout/Layout";
// import Routers from "../../Routers";
import CarouselEffect from "../../Components/Carousel/CarouselEffect";
import Product from "../../Components/Product/Product";
import Category from "../../Components/Category/Category";
const Landing = () => {
  return (
    <div>
      <Layout>
        <CarouselEffect />
        <Category />
        <Product />
        {/* <Routers /> */}
      </Layout>
    </div>
  );
};

export default Landing;
