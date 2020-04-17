import React from "react";
import ProductGridContainer from "../containers/ProductGridContainer";
import Header from "./Header";
import Title from "./Title";
import Footer from "./Footer";

export default class HomePage extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.props.userLoginFromToken(token);
    }
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
