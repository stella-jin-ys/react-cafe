import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { useCart } from "../components/CartContext";
import PopupWindow from "../components/PopupWindow";

type Props = {};

export default function Payment({}: Props) {
  const { totalPrice, totalQuantity, cartItems, setCartItems } = useCart();
  const [payment, setPayment] = useState<"swish" | "card">("swish");
  const [isPopup, setIsPopup] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const handleRemoveItem = (id: number) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  const handleConfirmPayment = () => {
    const randomOrder = `Order-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(randomOrder);
    setIsPopup(true);
  };

  return (
    <div className="min-h-screen bg-gray ">
      <Nav />
      <div className="w-full flex flex-wrap  justify-center items-stretch mt-10 px-20 pb-20 lg:px-0 rounded-md ">
        <div className="bg-slate-100 w-full lg:w-1/3 p-10 flex flex-col gap-5 ">
          <h2 className="font-semibold text-2xl text-wrap sm:text-nowrap text-slate-700">
            Order summary
          </h2>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-2 flex-wrap gap-10 border-b-2 py-5 justify-around"
            >
              <div className="w-20 h-20">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col sm:w-2/3 gap-3">
                <div className="flex justify-between ">
                  <p className="font-semibold sm:text-xl ">{item.name}</p>
                  <button
                    className="bg-slate-200 rounded-md flex justify-center items-center flex-shrink-0 py-1 hover:bg-slate-300"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <img
                      src="/assets/close.png"
                      alt="delete item"
                      className="w-6 h-6 object-cover"
                    />
                  </button>
                </div>
                <div className="flex flex-wrap justify-between items-center gap-5">
                  <div>
                    <span>Amount: </span>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      className="border-solid border border-slate-300 rounded-md w-14 py-1 px-2"
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                    />
                  </div>
                  <div className="">
                    <p className="text-nowrap">
                      {item.price * item.quantity} SEK
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between font-semibold">
            <p>Total</p>
            <p>{totalPrice} SEK</p>
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col gap-5 bg-white pb-10">
          <div className="font-semibold flex ">
            <div
              className={`py-5 w-full ${
                payment === "swish" ? "bg-white" : "bg-slate-100"
              }`}
            >
              <button className="px-5" onClick={() => setPayment("swish")}>
                Pay with Swish
              </button>
            </div>
            <div
              className={`py-5 w-full px-1 ${
                payment === "card" ? "bg-white" : "bg-slate-100"
              }`}
            >
              <button className="px-5" onClick={() => setPayment("card")}>
                Pay with Card
              </button>
            </div>
          </div>
          {payment === "swish" ? (
            <div className="flex flex-col px-10 gap-5">
              <h2 className="hidden sm:block sm:font-semibold sm:text-xl text-slate-500  ">
                Scan and complete your payment!
              </h2>

              <div>
                <img
                  src="/assets/scan.png"
                  alt="payment code"
                  className="h-20 w-20 object-cover"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="w-full">
                  Enter your email address to receive order status
                </label>
                <input
                  type="email"
                  className="border border-l-slate-400 rounded-md py-1 px-2 w-full sm:w-2/3 "
                />
              </div>
              <div>
                <input type="checkbox" className="mr-2" />
                <label htmlFor="checkbox">I accept terms and conditions</label>
              </div>
            </div>
          ) : (
            <div className="px-10">
              <div className="flex flex-col pb-5 gap-1">
                <label>Card number</label>
                <input
                  type="text"
                  placeholder="xxxx xxxx xxxx xxxx"
                  className="border-slate-200 border px-3 py-1 rounded-md"
                />
              </div>
              <div className="flex flex-wrap gap-5">
                <div className="flex flex-col gap-1">
                  <label>Expiry</label>
                  <input
                    type="text"
                    placeholder="xx / xx"
                    className="border-slate-200 border px-3 py-1 rounded-md"
                  />
                </div>
                <div className=" flex flex-col gap-1">
                  <label>CVC</label>
                  <input
                    type="text"
                    placeholder="xxx"
                    className="border-slate-200 border px-3 py-1 rounded-md"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="px-10 flex justify-center sm:justify-start">
            <button
              className="bg-slate-200 rounded-lg px-10 py-3 hover:bg-slate-300"
              onClick={handleConfirmPayment}
            >
              Confirm the payment
            </button>
          </div>
          {isPopup && (
            <PopupWindow
              isPopup={isPopup}
              setIsPopup={setIsPopup}
              orderNumber={orderNumber}
            />
          )}
        </div>
      </div>
    </div>
  );
}
