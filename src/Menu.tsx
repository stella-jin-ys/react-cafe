import React from "react";



type CoffeeItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const coffeeItems: CoffeeItem[] = [
  {
    id: 1,
    name: "Espresso",
    description: "Strong and bold coffee.",
    price: 25,
    image: "https://res.cloudinary.com/dtgczxb3p/image/upload/v1736857247/pixlr-image-generator-bd9a1bc1-6f37-4673-a3a3-b4edef132b2d_ldguup.webp",
  },
  {
    id: 2,
    name: "Latte",
    description: "Creamy coffee with milk.",
    price: 30,
    image: "https://res.cloudinary.com/dtgczxb3p/image/upload/v1736857240/pixlr-image-generator-a76a37b5-137d-4a5a-a9ae-83b3632ded27_cjvava.webp",
  },
  {
    id: 3,
    name: "Cappuccino",
    description: "Rich and frothy coffee.",
    price: 35,
    image: "https://res.cloudinary.com/dtgczxb3p/image/upload/v1736857227/pixlr-image-generator-ddbcb125-c211-43e7-a130-2d823304f861_rkrkyp.webp",
  },
  {
    id: 4,
    name: "Americano",
    description: "Diluted espresso with hot water.",
    price: 20,
    image: "https://res.cloudinary.com/dtgczxb3p/image/upload/v1736857215/pixlr-image-generator-c39907ff-9ab3-4649-ba25-9f99ee9f1fc8_oxw601.webp",
  },
  {
    id: 5,
    name: "Flat White",
    description: "Smooth coffee with steamed microfoam milk.",
    price: 32,
    image: "https://res.cloudinary.com/dtgczxb3p/image/upload/v1736857926/pixlr-image-generator-2d6bc2f3-6f87-429b-8a6a-b88ad71d1c65_iubmpd.webp",
  },
  {
    id: 6,
    name: "Mocha",
    description: "Rich coffee with a chocolatey twist.",
    price: 38,
    image: "https://res.cloudinary.com/dtgczxb3p/image/upload/v1736857958/pixlr-image-generator-544836f4-010f-4f4a-beb3-4bb8c82bb302_zewcoo.webp",
  },
];



const Menu: React.FC = () => {
  const handlePurchase = (coffee: CoffeeItem) => {
    console.log(`You clicked on ${coffee.name}. Price: ${coffee.price} SEK`);
    // TODO: Add logic for cart or modal
  };

  return (
    <div className="min-h-screen bg-grayishGreen text-darkBrown">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Coffee Menu</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coffeeItems.map((coffee) => (
            <div
              key={coffee.id}
              className="bg-lightBeige rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
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
                <button
                  onClick={() => handlePurchase(coffee)}
                  className="w-full bg-darkBrown text-lightBeige py-2 rounded hover:bg-opacity-90 transition"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
