"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useState, useEffect } from "react";

export default function HotTRS() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  const products = useSelector(
    (state: RootState) => state.products.allProducts
  );

  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsToShow(1); // Mobile
      else if (width < 768) setItemsToShow(2); // Small
      else if (width < 1024) setItemsToShow(3); // Medium
      else setItemsToShow(4); // Large
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

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
    <div className="bg-gray-100 p-4 sm:p-6 rounded-xl mt-6 mx-4 sm:mx-2 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg sm:text-xl font-semibold">Hot TRS 🔥</h2>
        <a href="#" className="text-sm text-gray-500 hover:underline">
          View all
        </a>
      </div>

      <div className="relative">
        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
              width: `${(products.length / itemsToShow) * 100}%`,
            }}
          >
            {products.map((item, idx) => {
              const product = item.collection_data?.[0];
              return (
                <div
                  key={idx}
                  className="px-2"
                  style={{ flex: `0 0 ${100 / itemsToShow}%` }}
                >
                  <Link href={`/marketplace/collection/${item.collection_name}`} passHref>
                    <div className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-2 sm:space-y-0">
                        <Image
                          src={product?.image_uri || "/book.svg"}
                          alt={product?.name || "Product"}
                          width={50}
                          height={50}
                          className="rounded-md object-cover w-[50px] h-[50px]"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm truncate">{product?.name}</h3>
                          <p className="text-gray-400 text-xs truncate">
                            {item.number_of_trs} / {product?.number} left - MISC
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-sm sm:text-md">${item.bid_price}</p>
                          <p className="text-green-600 text-xs">🔼 +1.2%</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
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
