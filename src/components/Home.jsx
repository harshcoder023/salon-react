import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Salons from "./Salons";
import Business from "./Business";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Salons />
      <Business />
      <Reviews />
    </>
  );
};

export default Home;
