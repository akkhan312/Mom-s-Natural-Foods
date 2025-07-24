import React from "react";
import ItemImg from "../assets/images/item.jpg";

const products = [
  {
    id: 1,
    name: "5-Pack Mix Granola",
    price: "₺ 1,189.90",
    badge: "5 Pack",
    image: ItemImg,
  },
  {
    id: 2,
    name: "3-Pack Strawberry-Chia Granola 360g",
    price: "₺ 749.90",
    badge: "3 Pack",
    image: ItemImg,
  },
  {
    id: 3,
    name: "3-Pack Blueberry Granola 360g",
    price: "₺ 749.90",
    badge: "3 Pack",
    image: ItemImg,
  },
  {
    id: 4,
    name: "3-Pack Granola Cocoa-Hazelnut 360g / Blueberry 360g / Strawberry-Chia…",
    price: "₺ 729.90",
    badge: "3 Pack",
    image: ItemImg,
  },
];

const ProductDetail = () => {
  return (
    <section className="py-10 px-4 text-center max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-left">
          <h2 className="text-2xl font-bold">
            For Long-Lasting Fullness and Energy
          </h2>
          <p className="mt-2">
            Mom’s Natural Foods 360g Granola, with its delicious flavors, helps
            you stay full and energetic for longer!
          </p>
        </div>
        <button className="mt-4 md:mt-0 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          360g Granola Varieties →
        </button>
      </div>

      {/* Products Grid */}
      <div className="mt-10 grid md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 rounded-lg shadow flex flex-col h-[430px] text-left"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="mx-auto h-48 object-contain"
              />
              {/* <div className="absolute top-2 left-2 bg-lime-400 text-white text-xs px-2 py-1 rounded-full font-semibold">
                {product.badge}
              </div> */}
            </div>

            <div className="flex-grow flex flex-col justify-between mt-4">
              <div>
                <h3 className="font-semibold text-sm line-clamp-2">
                  {product.name}
                </h3>
                <p className="mt-2 text-lg font-bold">{product.price}</p>
                <div className="text-gray-300 text-sm">★★★★★</div>
              </div>

              <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductDetail;
