import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import MyFooter from "./components/Footer";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Product from "./components/Product";
import Services from "./components/Services";
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />

      <Product />
      <Blog />
      <Newsletter />
      <MyFooter />
    </>
  );
}

export default App;
