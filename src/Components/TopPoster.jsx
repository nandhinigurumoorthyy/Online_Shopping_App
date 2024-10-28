import React from "react";
import logo from "./poster1.jpg";

const TopPoster = () => {
  return (
    <div className="flex justify-center bg-pink-100">
      <img src={logo} className="h-2/4" />
    </div>
  );
};

export default TopPoster;
