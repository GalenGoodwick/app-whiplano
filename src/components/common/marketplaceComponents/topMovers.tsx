import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TopMovers = ({ showAuthor = false, HeadingText = "Top Movers" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4;
  const itemWidth = 40 / itemsToShow;

  const products = [
    {
      id: "1",
      name: "Light on Bone",
      price: "$122",
      stock: "5 / 100 left",
      trend: "-1.71%",
      image: "/book.svg",
      author: "Author's name"
    },
    {
      id: "2",
      name: "The Silent Echo",
      price: "$98",
      stock: "12 / 100 left",
      trend: "+2.34%",
      image: "/book.svg",
      author: "Writer Person"
    },
    {
      id: "3",
      name: "Midnight Whispers",
      price: "$145",
      stock: "3 / 50 left",
      trend: "-0.89%",
      image: "/book.svg",
      author: "Novelist Smith"
    },
    {
      id: "4",
      name: "Golden Horizon",
      price: "$87",
      stock: "25 / 75 left",
      trend: "+5.12%",
      image: "/book.svg",
      author: "Storyteller Lee"
    },
    {
      id: "5",
      name: "Ocean's Depth",
      price: "$112",
      stock: "8 / 60 left",
      trend: "-3.45%",
      image: "/book.svg",
      author: "Author Jones"
    },
    {
      id: "6",
      name: "Mountain Peak",
      price: "$134",
      stock: "2 / 40 left",
      trend: "+7.23%",
      image: "/book.svg",
      author: "Writer Brown"
    },
    {
      id: "7",
      name: "Desert Mirage",
      price: "$76",
      stock: "15 / 80 left",
      trend: "+1.56%",
      image: "/book.svg",
      author: "Author Taylor"
    },
    {
      id: "8",
      name: "Forest Shadows",
      price: "$99",
      stock: "7 / 55 left",
      trend: "-2.78%",
      image: "/book.svg",
      author: "Writer Clark"
    }
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
    <div className="py-4">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {HeadingText}
          </h2>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            View all
          </a>
        </div>

        <div className="relative overflow-hidden w-full max-w-[1140px] mx-auto">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * itemWidth}%)`,
              width: `${products.length * (100 / itemsToShow)}%`
            }}
          >
            {products.map(product =>
              <div
                key={product.id}
                className="px-2"
                style={{ flex: `0 0 ${itemWidth}%` }}
              >
                <Link href={`/marketplace/products/${product.id}`} passHref>
                  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full">
                    <div className="relative w-full h-32 mb-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-gray-800 truncate">
                        {product.name}
                      </h3>
                      <p className="text-lg font-semibold text-gray-900">
                        {product.price}
                      </p>
                      <p className="text-sm text-gray-600">
                        {product.stock}
                      </p>
                      <p
                        className={`text-sm flex items-center ${product.trend.startsWith(
                          "-"
                        )
                          ? "text-red-500"
                          : "text-green-500"}`}
                      >
                        <span className="mr-1">
                          {product.trend.startsWith("-") ? "↘" : "↗"}
                        </span>
                        {product.trend}
                      </p>

                      {showAuthor &&
                        <div className="flex items-center mt-3 pt-3 border-t border-gray-100">
                          <div className="w-8 h-8 rounded-full overflow-hidden">
                            <Image
                              src="/avatar.svg"
                              width={32}
                              height={32}
                              alt={product.author}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <p className="ml-2 text-xs font-medium text-gray-700 truncate">
                            {product.author}
                          </p>
                        </div>}
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {currentIndex > 0 &&
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              aria-label="Previous items"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>}

          {currentIndex < products.length - itemsToShow &&
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              aria-label="Next items"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>}
        </div>
      </div>
    </div>
  );
};

export default TopMovers;
