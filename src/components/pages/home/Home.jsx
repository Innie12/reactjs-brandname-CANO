import React from "react";
import Footer from "../../partials/Footer";
import Nav from "../../partials/Nav";
import Hero from "./hero/Hero";
import Pricing from "./pricing/Pricing";
import Features from "./features/Features";
import Testimonials from "./testimonials/Testimonials";
import Cta from "../../partials/Cta";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Nav />
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Cta />
        <Footer />
      </div>
    </>
  );
};

export default Home;
