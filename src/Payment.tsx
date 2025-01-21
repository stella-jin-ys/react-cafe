import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { useCart } from "./CartContext";

type Props = {};

export default function Payment({}: Props) {
  const { totalPrice, totalQuantity, cartItems, setCartItems } = useCart();
  const handleRemoveItem = (id: number) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  return (
    <div className="min-h-screen bg-gray ">
      <Nav />
      <div className="w-full  flex flex-wrap  justify-center items-stretch mt-10 px-20 pb-20 lg:px-0 rounded-md ">
        <div className="bg-slate-100 w-full lg:w-1/3 p-10 flex flex-col gap-5 ">
          <h2 className="font-semibold text-2xl text-nowrap text-slate-700">
            Order summary
          </h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-2 gap-10 border-b-2 py-5">
              <div className="w-20 h-20">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-xl pb-3">{item.name}</p>
                <div>
                  <span>Amount: </span>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    className="border-solid border border-slate-300 rounded-md w-10 p-1"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <button
                  className="bg-slate-200 rounded-md flex justify-center items-center mb-3 py-1"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <img
                    src="./assets/close.png"
                    alt="delete item"
                    className="w-6 h-6 object-cover"
                  />
                </button>
                <p className="text-nowrap">{item.price} SEK</p>
              </div>
            </div>
          ))}

          <div className="flex justify-between font-semibold">
            <p>Total</p>
            <p>{totalPrice} SEK</p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-5 bg-white p-10">
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
            className="border border-l-slate-400 rounded-md py-1 px-2 w-full sm:w-2/3"
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
