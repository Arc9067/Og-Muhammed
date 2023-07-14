import React from "react";

const Header = () => {
  return (
    <header className="py-4 w-full bg-[#2B8454] absolute top-0 z-50">
      <nav className="container flex justify-between items-center">
        <a
          href=""
          className="capitalize font-Header text-3xl hover:scale-90 md:hover:scale-110 transition"
        >
          muhammed
        </a>
        <div className="flex items-center gap-6"></div>
      </nav>
    </header>
  );
};

export default Header;
