import React, { useEffect, useState } from "react";
import Nav from "./Nav";

type Props = {};

const cartItems = [
  {
    id: 1,
    title: "espresso",
    image:
      "https://images.unsplash.com/photo-1549652127-2e5e59e86a7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxjb2ZmZWV8ZW58MHx8MHx8fDA%3D",
    quantity: 1,
    price: 45,
  },
];
const addToCart = {
  id: 1,
  title: "espresso",
  image:
    "https://images.unsplash.com/photo-1549652127-2e5e59e86a7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxjb2ZmZWV8ZW58MHx8MHx8fDA%3D",
  quantity: 1,
  price: 45,
};

export default function Payment({}: Props) {
  const [total, setTotal] = useState(0);

  // Calculate the total price of all items in the cart

  return (
    <div className="h-screen bg-gray ">
      <Nav />
      <div className="w-full h-2/3 flex flex-wrap justify-center items-center mt-10 p-10 rounded-md ">
        <div className=" bg-slate-100 p-10">
          <div className="flex flex-col w-1/2">
            <h2 className="font-semibold text-2xl text-nowrap text-slate-700">
              Order summary
            </h2>
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
                  <button className="bg-gray-200 rounded-md">
                    <img
                      src="./assets/close.png"
                      alt="delete item"
                      className="w-6 h-6 object-cover"
                    />
                  </button>
                  <p className="p-1">${item.price}</p>
                </div>
              </div>
            ))}
            <div className="flex flex-col gap-3 py-3">
              <div className="flex justify-between font-semibold">
                <p>Total</p>
                <p>${total}</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-5  bg-white p-10">
          <h2 className="font-semibold text-xl text-slate-500">
            Scan and complete your payment!
          </h2>

          <div className="justify-self-center">
            <img
              src="./assets/scan.png"
              alt="payment code"
              className="h-20 w-20 object-cover"
            />
          </div>
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
        </div>
      </div>
    </div>
  );
}
