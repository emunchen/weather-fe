import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-white px-6 border-t">
      <div className="container mx-auto max-w-4xl py-6 flex flex-wrap md:flex-no-wrap justify-between items-center text-sm">
        &copy;2019 Your Company. All rights reserved.
        <div className="pt-4 md:p-0 text-center md:text-right text-xs">
          <a href="#" className="text-black no-underline hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-black no-underline hover:underline ml-4">
            Terms &amp; Conditions
          </a>
          <a href="#" className="text-black no-underline hover:underline ml-4">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
