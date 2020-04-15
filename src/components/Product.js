import React from "react";

const Product = ({ city }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
      <a href={`/${city.slug}`}>
        <img
          src={`https://loremflickr.com/g/320/240/${city.name}`}
          className="w-full h-auto rounded-lg"
        />
      </a>
      <h2 className="text-xl py-4">
        <a href={`/${city.slug}`} className="text-black no-underline">
          {city.name}
        </a>
      </h2>
      <p className="text-xs leading-normal">Wind: {city.wind}</p>
      <p className="text-xs leading-normal">Latitude: {city.latitude.value}</p>
      <p className="text-xs leading-normal">
        Longitude: {city.longitude.value}
      </p>
    </div>
  );
};
export default Product;
