import React from "react";
import Product from "./Product";

const ProductGrid = () => {
  return (
    <div className="w-full px-6 py-12 bg-gray-100 border-t">
      <div className="container max-w-4xl mx-auto pb-10 flex justify-between items-center px-3">
        <div className="text-xs">
          <a
            href="#"
            className="bg-gray-500 text-white no-underline py-1 px-2 rounded-lg mr-2"
          >
            Previous
          </a>
          <div className="hidden md:inline">
            <a href="#" className="text-sm px-1 text-gray-900 no-underline">
              1
            </a>
            <a href="#" className="text-sm px-1 text-gray-900 no-underline">
              2
            </a>
            <a href="#" className="text-sm px-1 text-gray-900 no-underline">
              3
            </a>
            <span className="px-2 text-gray">...</span>
            <a href="#" className="text-sm px-1 text-gray-900 no-underline">
              42
            </a>
          </div>
          <a
            href="#"
            className="bg-black text-white no-underline py-1 px-2 rounded-lg ml-2"
          >
            Next
          </a>
        </div>

        <div className="text-sm text-gray-600">
          Per page:
          <select className="bg-white border rounded-lg w-24 h-8 ml-1">
            <option>24</option>
            <option>48</option>
            <option>All</option>
          </select>
        </div>
      </div>

      <div className="container max-w-4xl mx-auto pb-10 flex flex-wrap">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>

      <div className="container max-w-4xl mx-auto pb-10 flex justify-between items-center px-3">
        <div className="text-xs">
          <a
            href="#"
            className="bg-gray-500 text-white no-underline py-1 px-2 rounded-lg mr-2"
          >
            Previous
          </a>
          <div className="hidden md:inline">
            <a href="#" className="text-sm px-1 text-gray-900 no-underline">
              1
            </a>
            <a href="#" className="text-sm px-1 text-gray-900 no-underline">
              2
            </a>
            <a href="#" className="text-sm px-1 text-gray-900 no-underline">
              3
            </a>
            <span className="px-2 text-gray">...</span>
            <a href="#" className="text-sm px-1 text-gray-900 no-underline">
              42
            </a>
          </div>
          <a
            href="#"
            className="bg-black text-white no-underline py-1 px-2 rounded-lg ml-2"
          >
            Next
          </a>
        </div>

        <div className="text-sm text-gray-600">
          Per page:
          <select className="bg-white border rounded-lg w-24 h-8 ml-1">
            <option>24</option>
            <option>48</option>
            <option>All</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;