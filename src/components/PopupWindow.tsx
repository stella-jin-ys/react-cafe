import React, { useState } from "react";

type Props = {
  isPopup: boolean;
  setIsPopup: React.Dispatch<React.SetStateAction<boolean>>;
  orderNumber: string;
};

export default function PopupWindow({
  isPopup,
  setIsPopup,
  orderNumber,
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
            <div className="bg-white rounded-lg p-6 shadow-lg w-96">
              <h2 className="text-2xl font-semibold text-emerald-600 text-center mb-4">
                Payment Successful!
              </h2>

              <p className="text-xl font-bold text-center mb-6">
                Your order number is: {orderNumber}
              </p>
              <button
                className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 w-full"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
