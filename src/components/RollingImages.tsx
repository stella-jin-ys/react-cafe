import { Link } from "react-router-dom";
import productData from "../products.json";

const images = productData.map((data) => data.image);

export default function RollingImages() {
  return (
    <div className="overflow-hidden relative w-4/5 md:w-2/3 lg:w-1/2 h-96 ">
      <div
        className="flex animate-infinite-scroll "
        style={{
          width: `${images.length * 10}rem`, // Dynamically calculate width for images + gap
        }}
      >
        {productData.map((coffee) => (
          <Link to={`/product/${coffee.id}`}>
            <button className="flex-shrink-0 w-48 h-48  rounded-lg overflow-hidden mr-5 transform transition-transform hover:scale-110">
              <img
                key={coffee.id}
                src={coffee.image}
                alt={coffee.name}
                className="h-full w-full object-cover"
              />
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
