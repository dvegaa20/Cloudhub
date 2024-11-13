import React from "react";

import Blog from "../blog/Blog";
import Clients from "../clients/Clients";
import Features from "../features/Features";
import Footer from "../footer/Footer";
import Funcionality from "../funcionality/Funcionality";
import Hero from "../hero/Hero";
import Hero2 from "../hero2/Hero2";
import Navbar from "../../components/navbar/Navbar";
import "../../App.css";

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Clients />
      <Features />
      <Funcionality />
      <Blog />
      <Hero2 />
      <Footer />
    </div>
  );
};

export default Home;
