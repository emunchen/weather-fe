import React from "react";

const Header = () => {
  return (
    <header className="w-full px-6 bg-white">
      <div className="container mx-auto max-w-4xl md:flex justify-between items-center">
        <a
          href="/"
          className="block py-6 w-full text-center md:text-left md:w-auto text-gray-600 no-underline flex justify-center items-center"
        >
          Weather App
        </a>
        <div className="w-full md:w-auto mb-6 md:mb-0 text-center md:text-right">
          <a
            href="/login"
            className="inline-block no-underline bg-black text-white text-sm py-2 px-3"
          >
            Sign In / Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
