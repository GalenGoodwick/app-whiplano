import Image from "next/image";

export default function HotTRS() {
  const products = [
    {
      name: "Light on Bone",
      price: "$122",
      stock: "5 / 100 left",
      category: "MISC",
      trend: "1.71%",
      image: "./book.svg" // Replace with actual image path
    },
    {
      name: "Light on Bone",
      price: "$122",
      stock: "5 / 100 left",
      category: "MISC",
      trend: "1.71%",
      image: "./book.svg"
    },
    {
      name: "Light on Bone",
      price: "$122",
      stock: "5 / 100 left",
      category: "MISC",
      trend: "1.71%",
      image: "./book.svg"
    }
  ];

  return (
    <div className="bg-gray-100 p-4 rounded-xl mt-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold">Hot TRS 🔥</h2>
        <a href="#" className="text-sm text-gray-500 hover:underline">
          View all
        </a>
      </div>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 lg:flex">
        {products.map((product, index) =>
          <div
            key={index}
            className="bg-white p-3 rounded-xl shadow-md min-w-[220px] flex-shrink-0 sm:w-full lg:w-auto"
          >
            <div className="flex items-center space-x-3">
              <Image
                src={product.image}
                alt={product.name}
                width={50}
                height={50}
                className="rounded-md object-cover"
              />
              <div>
                <h3 className="font-semibold text-sm">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-xs">
                  {product.stock} - {product.category}
                </p>
              </div>
              <div className="flex flex-col items-center ">
                <p className="font-semibold text-md">
                  {product.price}
                </p>
                <p className="text-green-600 text-xs ">
                  🔼 {product.trend}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
