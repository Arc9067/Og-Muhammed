import React from "react";

const Hero = () => {
  return (
    <section
      className="py-32 min-h-screen w-full bg-fixed flex justify-center items-center"
      id="hero"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-16">
        <article className="flex flex-col gap-8">
          <div className=" text-white text-7xl font-Header md:text-7xl">
            Introducing Muhammad
          </div>
          <div className=" text-white text-2xl font-normal">
            ☪️Muhammad Cousin of Jesus☪️ crypto project on Ethereum! We're
            blending faith and technology in a way that's cooler than a camel in
            sunglasses With just a 1% tax, our transactions support project
            growth and charitable causes, making it rain blessings. This ain't
            your ordinary crypto venture – we're all about unity, empowering our
            community through decentralized decision-making. Together, we'll
            conquer poverty, educate minds, heal bodies, and save the planet. So
            hop on this magic carpet ride and let's bridge the gap between
            finance and feel-good vibes! 🚀✨
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
