import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import MyFooter from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Services from "./components/Services";
import React from "react";
import ReactDOM from "react-dom";
import Procedure from "./components/Procedure";
import Evaluate from "./components/Evaluate";
import Question from "./components/Question";
import Contact2 from "./components/Contact2";


function App() {
  return (
    <>
      <Contact2 />  
      <Navbar />
      <Home />
      <About />
      <Procedure />
      <Services />
      <Product />
      <Blog />
      <Evaluate/>
      <Question/>
      <Contact />
      <MyFooter />  
    </>
  );
}

export default App;
