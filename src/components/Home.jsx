import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Salons from "./Salons";
import Business from "./Business";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Salons />
      <Business />
    </>
  );
};

export default Home;
