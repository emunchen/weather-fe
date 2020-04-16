import React from "react";
import ProductGridContainer from "../containers/ProductGridContainer";
import Header from "./Header";
import Title from "./Title";
import Footer from "./Footer";

export default class HomePage extends React.Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <div>
        <Header />
        <Title />
        <ProductGridContainer />
        <Footer />
      </div>
    );
  }
}
