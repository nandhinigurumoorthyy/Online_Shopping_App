import React from "react";
import list from "../Data";
import Cards from "./Cards";

const Items = ({handleClick}) => {
  return (
    <section className="grid grid-rows-5 mt-4 grid-flow-col gap-4">
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Items;
