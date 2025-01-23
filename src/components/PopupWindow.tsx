import React, { useState } from "react";

type Props = {
  isPopup: boolean;
  setIsPopup: React.Dispatch<React.SetStateAction<boolean>>;
  orderNumber: string;
  isError: boolean;
};

export default function PopupWindow({
  isPopup,
  setIsPopup,
  orderNumber,
  isError,
}: Props) {
  const closePopup = () => {
    setIsPopup(false);
  };
  return (
    <div>
      <div className="relative">
        {/* Popup Window */}
        {isPopup && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            {isError ? (
              <div className="bg-white rounded-lg p-6 shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-red-600 text-center mb-4">
                  Payment Failed!
                </h2>
                <p className="text-xl font-bold text-center mb-6">
                  Please try again!
                </p>
                <button
                  className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 w-full"
                  onClick={closePopup}
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-lg p-6 shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-emerald-600 text-center mb-4">
                  Payment Successful!
                </h2>
                <p className="text-xl font-bold text-center mb-6">
                  Your order number: {orderNumber}
                </p>
                <button
                  className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 w-full"
                  onClick={closePopup}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
