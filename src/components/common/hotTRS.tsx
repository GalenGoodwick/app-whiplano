import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HotTRS() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4; // Number of items to show at once

  const products = [
    {
      id: "1",
      name: "Light on Bone",
      price: "$122",
      stock: "5 / 100 left",
      category: "MISC",
      trend: "1.71%",
      image: "/book.svg",
    },
    {
      id: "2",
      name: "The Silent Echo",
      price: "$98",
      stock: "12 / 100 left",
      category: "BOOKS",
      trend: "2.34%",
      image: "/book.svg",
    },
    {
      id: "3",
      name: "Midnight Whispers",
      price: "$145",
      stock: "3 / 50 left",
      category: "MISC",
      trend: "0.89%",
      image: "/book.svg",
    },
    {
      id: "4",
      name: "Golden Horizon",
      price: "$87",
      stock: "25 / 75 left",
      category: "ART",
      trend: "5.12%",
      image: "/book.svg",
    },
    {
      id: "5",
      name: "Ocean's Depth",
      price: "$112",
      stock: "8 / 60 left",
      category: "MISC",
      trend: "3.45%",
      image: "/book.svg",
    },
    {
      id: "6",
      name: "Mountain Peak",
      price: "$134",
      stock: "2 / 40 left",
      category: "BOOKS",
      trend: "7.23%",
      image: "/book.svg",
    },
  ];

  const goToNext = () => {
    if (currentIndex < products.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-xl mt-6 max-w-[1140px] mx-auto">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold">Hot TRS 🔥</h2>
        <a href="#" className="text-sm text-gray-500 hover:underline">
          View all
        </a>
      </div>

      <div className="relative">
        {/* Carousel container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
              width: `${products.length * (100 / itemsToShow)}%`,
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="px-2"
                style={{ flex: `0 0 ${100 / itemsToShow}%` }}
              >
                <Link href={`/marketplace/products/${product.id}`} passHref>
                  <div className="bg-white p-3 rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-3">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={50}
                        height={50}
                        className="rounded-md object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-sm">{product.name}</h3>
                        <p className="text-gray-400 text-xs">
                          {product.stock} - {product.category}
                        </p>
                      </div>
                      <div className="flex flex-col items-center">
                        <p className="font-semibold text-md">{product.price}</p>
                        <p className="text-green-600 text-xs">🔼 {product.trend}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        {currentIndex > 0 && (
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white w-8 h-8 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous items"
          >
            &lt;
          </button>
        )}

        {currentIndex < products.length - itemsToShow && (
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white w-8 h-8 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            aria-label="Next items"
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
}