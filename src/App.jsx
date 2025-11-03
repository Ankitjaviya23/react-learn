import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Card from "./component/Card";
import Counter from "./component/Counter";
import Todo from "./component/Todo";
import Testimonial from "./component/Testimonial";
import Product from "./component/Product";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  return (
    <>
      <Header />

      <Footer />
    </>
  );
};

export default App;
