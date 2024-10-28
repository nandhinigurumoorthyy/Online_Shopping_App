import React, { useState, useEffect } from "react";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);

  return (
    <div className="m-6 mt-28 ">
      {cart?.map((item) => (
        <div key={item.id} className="flex gap-36 mb-8">
          <div className="flex gap-8 items-center">
            <img src={item.img} alt="" className="h-20 w-20" />
            <p className="flex justify-center text-lg  font-semibold text-pink-800">
              {item.title}
            </p>
          </div>

          <div className="text-5xl gap-5 cursor-pointer flex items-center">
            <button onClick={() => handleChange(item, +1)}>+</button>
            <button className="text-3xl">{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>

          <div className="flex flex-row gap-8 items-center">
            <span className="text-3xl ">
              ₹ {item.price}{" "}
              <span className="text-sm">
                (Price per quantity)
              </span>
            </span>
            <button
              onClick={() => handleRemove(item.id)}
              className="border-2 py-2 px-3 rounded hover:ring-slate-600 hover:px-4 bg-pink-700 hover:font-semibold text-white "
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className=" flex gap-4">
        <span className="text-2xl">Total Price of your Cart</span>
        <span className="text-2xl text-pink-800">₹ {price}</span>
      </div>
    </div>
  );
};

export default Cart;
