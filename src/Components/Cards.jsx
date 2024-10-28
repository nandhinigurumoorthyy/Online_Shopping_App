import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, des, price, img } = item;
  return (
    <div className="m-7  hover:m-3 hover:bg-pink-100">
      <div className="image pb-4 flex justify-center">
        <img src={img} alt="" className="h-56 w-60" />
      </div>
      <div className="details bg-slate-200 p-3 h-52">
        <p className="text-xl font-semibold flex justify-center">{title}</p>
        <p className="text-lg">{des}</p>
        <p className="font-semibold font-mono">₹ {price}</p>
        <button
          onClick={() => handleClick(item)}
          className="rounded border-2 p-2 hover:font-semibold hover:text-white hover:bg-pink-800 hover:outline bg-slate-600 hover:ring-2 hover:ring-slate-600 text-white"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cards;
