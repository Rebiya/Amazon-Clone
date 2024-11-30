import "./App.css";
import CarouselEffect from "./Components/Carousel/CarouselEffect";
import Category from "./Components/Category/Category";
import Header from "./Components/Header/Header";
import LowerHeader from "./Components/Header/LowerHeader";
import Product from "./Components/Product/Product";
function App() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <LowerHeader />
      <CarouselEffect />
      <Category />
      <Product />
    </>
  );
}

export default App;
