import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Mics from "./Components/Mics";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#0B8A4D] text-white relative">
      <Header />
      <Hero />
      <Mics />
      <Footer />
    </div>
  );
};

export default App;
