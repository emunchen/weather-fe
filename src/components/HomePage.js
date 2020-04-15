import React from "react";
import ProductGridContainer from "../containers/ProductGridContainer";
import Header from "./Header";
import Title from "./Title";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Title />
      <ProductGridContainer />
      <Footer />
    </div>
  );
};

export default HomePage;
