import React, { useEffect, useState } from "react";
import Nav from "./Nav";

type Props = {};

const cartItems = [
  { id: 1, title: "espresso", image: "", quantity: 1, price: 45 },
];
const addToCart = {
  id: 1,
  title: "espresso",
  image: "",
  quantity: 1,
  price: 45,
};

export default function Payment({}: Props) {
  const [total, setTotal] = useState(0);

  // Calculate the total price of all items in the cart

  return (
    <div className="h-screen bg-gray ">
      <Nav />
      <div className="flex justify-center  ">
        <div className="w-4/5 sm:w-2/3 h-full bg-lightGray p-20">
          <div className="flex flex-col w-1/2">
            <h2 className="font-semibold">Cart</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-10 border-b-2 py-5">
                <div className="w-20 h-20">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <p>{item.title}</p>
                  <div>
                    <span>Amount: </span>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      className="border-solid border border-slate-300 rounded-md w-20 p-1"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <button className="bg-gray-200 rounded-md">X</button>
                  <p className="p-1">${item.price}</p>
                </div>
              </div>
            ))}
            <div className="flex flex-col gap-3 py-3">
              <div className="flex justify-between font-semibold">
                <p>Total</p>
                <p>${total + 6}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="font-semibold">Kassa</h2>
            <label htmlFor="email">
              Enter your email address to receive order status
            </label>
            <input
              type="email"
              className="border border-l-slate-400 rounded-md py-1 px-2 w-full"
            />
            <div>
              <input type="checkbox" className="mr-2" />
              <label htmlFor="checkbox">I accept terms and conditions</label>
            </div>
            <div>
              <button className="bg-black text-white w-1/2 rounded-sm py-3">
                Pay now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
