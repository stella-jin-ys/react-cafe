import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import productData from "./products.json";
import Nav from "./Nav";
import { useCart, CartItem } from "./CartContext";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [coffee, setCoffee] = useState<any | null>(null);
  const [quantity, setQuantity] = useState(0);
  const { cartItems, setCartItems } = useCart();

  useEffect(() => {
    const selectedProduct = productData.find(
      (item: any) => item.id === parseInt(id || "")
    );
    setCoffee(selectedProduct || null); // Set the coffee data
    setQuantity(0);
  }, [id]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Math.max(1, parseInt(e.target.value));
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    if (!coffee) return;
    const itemToAdd = { ...coffee, quantity };
    setCartItems((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.id === coffee.id
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === coffee.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      }
      return [...prevCart, { ...itemToAdd }];
    });
    setQuantity(0);
  };

  if (!coffee) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="bg-gray h-full">
      <Nav />
      <div className="container mx-auto py-12 px-4 sm:px-8 lg:px-12">
        <main className="pt-24">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
            <div className="w-full md:w-1/2">
              <img
                src={coffee.image}
                alt={coffee.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg hover:scale-105 transition-all"
              />
            </div>

            <div className="w-full md:w-1/2 px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-semibold text-darkBrown mb-4">
                {coffee.name}
              </h2>
              <p className="text-xl font-bold text-darkBrown mb-6">
                {coffee.price} SEK
              </p>
              <p className="text-lg text-gray-600 mb-6">{coffee.details}</p>

              <div className="mb-6">
                <label
                  htmlFor="quantity"
                  className="text-lg text-darkBrown mb-2 block"
                >
                  Quantity:
                </label>
                <input
                  id="quantity"
                  type="number"
                  value={quantity}
                  min="0"
                  onChange={handleQuantityChange}
                  className="w-24 px-4 py-2 border rounded-md"
                />
              </div>

              <button
                onClick={() => handleAddToCart()}
                className="bg-darkBrown text-lightBeige py-3 px-6 rounded-lg text-xl w-full hover:bg-opacity-90 transition-all mb-4"
              >
                Add to Cart
              </button>

              <Link to="/payment" state={cartItems}>
                <button className="bg-darkBrown text-white py-3 px-6 rounded-lg text-xl w-full hover:bg-opacity-90 transition-all">
                  Go to Payment
                </button>
              </Link>
            </div>
          </div>

          <section className="mt-16">
            <h3 className="text-3xl font-semibold text-darkBrown mb-6">
              Related Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productData
                .filter((item) => item.id !== coffee.id) // Exclude current product
                .map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    to={`/product/${relatedProduct.id}`}
                    className="bg-lightBeige rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-95"
                  >
                    <div className="w-full h-72">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-darkBrown mb-2">
                        {relatedProduct.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4">
                        {relatedProduct.description}
                      </p>
                      <p className="text-lg font-bold text-darkBrown mb-4">
                        {relatedProduct.price} SEK
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProductPage;
