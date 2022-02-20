import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Topnav from "./components/navbar/Topnav";
import Blog from "./views/blog";
import Home from "./views/home";
import NewBlogPost from "./views/new";

function App() {
  return (
    <BrowserRouter>
      <Topnav />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/new" element={<NewBlogPost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
