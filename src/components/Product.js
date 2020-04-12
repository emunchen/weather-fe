import React from "react";

const Product = () => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
      <a href="#">
        <img
          src="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800"
          className="w-full h-auto rounded-lg"
        />
      </a>

      <h2 className="text-xl py-4">
        <a href="#" className="text-black no-underline">
          Product name
        </a>
      </h2>

      <p className="text-xs leading-normal">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </p>
    </div>
  );
};
export default Product;