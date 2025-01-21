import React from "react";
import { Link } from "react-router-dom";
import productData from './products.json'; 

const Menu: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray text-darkBrown">
      <div className="container mx-auto py-8 px-4 sm:px-8 lg:px-12">
        <h1 className="text-4xl font-bold text-center mb-8">Coffee Menu</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
          {productData.map((coffee) => (
            <div
              key={coffee.id}
              className="bg-lightBeige rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              {/* Link to product page */}
              <Link to={`/product/${coffee.id}`} className="block">
                <div className="w-full h-80">
                  <img
                    src={coffee.image}
                    alt={coffee.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{coffee.name}</h2>
                  <p className="text-sm text-gray-600 mb-4">{coffee.description}</p>
                  <p className="text-lg font-bold mb-4">{coffee.price} SEK</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
