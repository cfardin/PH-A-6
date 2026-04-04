import React, { use, useState } from "react";
import PriceCards from "./PriceCards";
import MyCart from "./MyCart";

const PricingContainer = ({priceData}) => {
  const [active, setActive] = useState("products");

  const [selected, setSelected] = useState([]);
  
  
  const priceInfo = use(priceData);
//   console.log(priceInfo);

  return (
    <div className="w-full md:w-10/12 m-auto flex flex-col items-center text-center mb-30">
      {/* pricing card heading */}
      <div>
        <h1 className="text-[48px] font-extrabold">Premium Digital Tools</h1>
        <p className="text-[#627382] mt-4">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>


      {/* toggle btn */}
      <div className="flex items-center bg-gray-100 rounded-full p-1 w-fit mt-4 mb-10">
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
          Cart ({selected.length})
        </button>
      </div>

      {/* price cards  */}
      {
        active === "products" ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {
            priceInfo.map((cards, index) => <PriceCards key={index} cards = {cards} selected={selected} setSelected = {setSelected} ></PriceCards>)
        }
      </div> : <MyCart selected = {selected} setSelected = {setSelected} ></MyCart>
      }
     


    </div>
  );
};

export default PricingContainer;
