import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats.jsx";
import Portfolio from "../components/sections/Portfolio";
import Approach from "../components/sections/Approach";
import Team from "../components/sections/Team";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Portfolio />
        <Approach />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
