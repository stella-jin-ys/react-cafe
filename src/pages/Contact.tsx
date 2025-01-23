import React from "react";
import Footer from "../components/Footer";
import Review from "../components/Review";
import ReviewCard from "../components/ReviewCard";
import Nav from "../components/Nav";

export default function Contact() {
  return (
    <div className="bg-gray">
      <Nav />

      <div className="bg-gray min-h-screen flex flex-col justify-between">
        <div className="flex flex-col md:flex-row justify-center items-center flex-grow">
          <div className="space-y-4 p-8 md:p-16">
            <p className="text-lg">
              <strong>Your welcome to contact us.</strong>
            </p>
            <p className="text-base">Address:</p>
            <p className="text-sm">
              Brunchy Coffee,
              <br />
              1234 Maplewood Avenue,
              <br />
              Suite 100, Brookside,
              <br />
              CA 90210
            </p>
            <p className="text-base">Open Hours:</p>
            <p className="text-sm">Mo-Sun 9 AM - 5PM</p>
            <p className="text-base border border-gray-300 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
              Email:
              <a
                href="mailto:link@reactcafe.com"
                className="text-blue-500 underline"
              >
                link@reactcafe.com
              </a>
            </p>
            <p className="text-base border border-gray-300 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
              Phone:
              <a
                href="tel:link-phonenumber"
                className="text-blue-500 underline"
              >
                link-phonenumber
              </a>
            </p>
          </div>

          <div className="flex flex-col space-y-4 p-4">
            <img
              className="h-48 w-48 md:h-100 md:w-96 object-cover"
              src={`${process.env.PUBLIC_URL}/assets/coffeeshop.png`}
              alt="coffeshop1"
            />
            <img
              className="h-48 w-48 md:h-100 md:w-96 object-cover"
              src={`${process.env.PUBLIC_URL}/assets/coffeeshops.png`}
              alt="coffeshop2"
            />
          </div>
        </div>

        <ReviewCard />
        <Footer />
      </div>
    </div>
  );
}
