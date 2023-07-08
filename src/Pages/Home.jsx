import React from "react";
import NavBar from "../Components/NavBar";
import Slider from "../Components/Slider";
import Productdesc from "../Components/Productdesc";
import Products from "../Components/Products";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div>
      <NavBar />
      <Slider />
      <Productdesc />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};
export default Home;
