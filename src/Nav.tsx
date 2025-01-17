import React, { useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

export default function Nav({}: Props) {
  const [sideNav, setSideNav] = useState(false);
  const clickSideNav = () => setSideNav(!sideNav);
  return (
    <div className="flex justify-around p-5">
      <Link to="/">
        <div className="flex gap-1 font-bol">
          <img
            src="./assets/logo.png"
            alt="logo"
            className="w-6 h-6 object-cover"
          />
          React Cafe
        </div>
      </Link>
      <div className="flex sm:justify-between sm:gap-5">
        <div className="sm:hidden">
          {sideNav ? (
            <img
              src="./assets/close.png"
              alt="close icon"
              className="w-8 h-8 cursor-pointer"
              onClick={clickSideNav}
            />
          ) : (
            <img
              src="./assets/hamburger.png"
              alt="hamburger menu"
              className="w-8 h-8 cursor-pointer"
              onClick={clickSideNav}
            />
          )}

          {sideNav && (
            <div className="flex flex-col absolute right-36 bg-stone-200 rounded-lg  w-36 h-48 gap-5 justify-center items-center text-slate-500 font-semibold">
              <div>
                <Link to="/" className="hover:border-b ">
                  HOME
                </Link>
              </div>
              <div>
                <Link to="/menu" className="hover:border-b ">
                  MENU
                </Link>
              </div>
              <div>
                <Link to="contact" className="hover:border-b ">
                  CONTACT
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="hidden sm:flex sm:justify-between gap-3 w-full ">
          <div>
            <Link to="/" className="hover:border-b ">
              HOME
            </Link>
          </div>
          <div>
            <Link to="/menu" className="hover:border-b ">
              MENU
            </Link>
          </div>
          <div>
            <Link to="contact" className="hover:border-b ">
              CONTACT
            </Link>
          </div>
        </div>
        <Link to="/payment">
          <img
            src="./assets/cart.png"
            alt=""
            className="w-7 h-7 object-cover cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
}
