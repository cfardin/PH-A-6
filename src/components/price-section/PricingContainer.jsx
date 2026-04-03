import React, { useState } from "react";

const PricingContainer = () => {
  const [active, setActive] = useState("products");
  return (
    <div className="w-10/12 m-auto flex flex-col items-center text-center">
      {/* pricing card heading */}
      <div>
        <h1>Premium Digital Tools</h1>
        <p>
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>


      {/* toggle btn */}
      <div className="flex items-center bg-gray-100 rounded-full p-1 w-fit">
            {/* Products Button */}
        <button
          onClick={() => setActive("products")}
          className={`px-6 py-2 rounded-full font-medium transition-all
          ${
            active === "products"
              ? "bg-linear-to-r from-purple-500 to-purple-600 text-white shadow-lg"
              : "text-purple-900"
          }`}
        >
          Products
        </button>
            {/* Cart Button */}
        <button
          onClick={() => setActive("cart")}
          className={`px-6 py-2 rounded-full font-medium transition-all
          ${
            active === "cart"
              ? "bg-linear-to-r from-purple-500 to-purple-600 text-white shadow-lg"
              : "text-purple-900"
          }`}
        >
          Cart (2)
        </button>
      </div>

      {/* price cards  */}
      


    </div>
  );
};

export default PricingContainer;
