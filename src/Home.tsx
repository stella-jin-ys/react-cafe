import React, { useState } from "react";
import Nav from "./Nav";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="bg-gray h-screen overflow-hidden">
      <Nav />
      <div className="w-auto justify-center p-10 sm:flex sm:items-center gap-10 md:gap-0">
        <div className="md:border-b border-zinc-400  text-wrap self-center text text-5xl sm:w-1/4">
          <div className="font-kings-regular text-slate-800 w-2/3 lg:px-5">
            SIP, SAVOR, AND STAY A WHILE
          </div>
        </div>
        <div className="max-h-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1664970900025-1e3099ca757a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D"
            className="w-auto max-h-screen object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
