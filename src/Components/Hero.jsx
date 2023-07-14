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
            Pepe and Toad the memecoin Launched on the ethereum. Our mission is
            to provide a fun, community-driven investment opportunity that
            celebrates the power of memes and pop culture. With a vision to
            become the leading memecoin in the market, we believe Pepe and Toad
            is the perfect addition to any investor’s portfolio. Join us on this
            journey to revolutionize the world of memecoins.
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
