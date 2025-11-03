import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "../pages/Home";
import Todo from "../component/Todo";
import Product from "../component/Product";
import Contact from "../pages/Contact";
import About from "../pages/AboutUs";
import Blog from "../component/Blog";

const Header = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>

        <li>
          <Link to={"/todo"}>Todo</Link>
        </li>
        <li>
          <Link to={"/product"}>Product</Link>
        </li>

        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>

        <li>
          <Link to={"/about"}>About Us</Link>
        </li>

        <li>
          <Link to={"/blog"}>Blog</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
};

export default Header;
