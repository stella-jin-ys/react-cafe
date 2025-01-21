import React, { useState } from "react";
import { Link } from "react-router-dom";
import productData from './products.json'; 
import Nav from "./Nav";

const Menu: React.FC = () => {
 
  const [sortOption, setSortOption] = useState("name"); 

  // Function to handle sorting
  const sortItems = (items: any[], option: string) => {
    if (option === "price-asc") {
      return items.sort((a, b) => a.price - b.price); // Sort by price ascending
    }
    if (option === "price-desc") {
      return items.sort((a, b) => b.price - a.price); // Sort by price descending
    }
    if (option === "name") {
      return items.sort((a, b) => a.name.localeCompare(b.name)); // Sort by name
    }
    return items;
  };

  // Handle sort option change
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  // Sort items based on the selected option
  const sortedItems = sortItems([...productData], sortOption); // Create a new copy of the array before sorting

  return (
    <div className="min-h-screen bg-gray text-darkBrown">
      <Nav />

      <div className="container mx-auto py-8 px-4 sm:px-8 lg:px-12 pt-20">
        <h1 className="text-4xl font-bold text-center mb-8">Coffee Menu</h1>

        {/* Sorting Dropdown */}
        <div className="mb-8">
          <label htmlFor="sort" className="text-lg font-semibold mr-4">Sort by:</label>
          <select
            id="sort"
            value={sortOption}
            onChange={handleSortChange}
            className="p-2 border border-darkBrown rounded"
          >
            <option value="name">Name (A-Z)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
          </select>
        </div>

        {/* Render Sorted Coffee Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
          {sortedItems.map((coffee) => (
            <div
              key={coffee.id}
              className="bg-lightBeige rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
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
