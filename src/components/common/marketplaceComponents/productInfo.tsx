import Image from "next/image";

interface ProductProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: string;
    priceChange: string;
    category: string;
    author: string;
    contract: string;
    trsCreated: number;
    trsSold: number;
    royaltyEarned: number;
    priceRange: string;
    image: string;
  };
}

const ProductInfo = ({ product }: ProductProps) => {
  return (
    <div className="flex flex-col lg:flex-row bg-white p-6 rounded-xl shadow-md space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Left Section: Product Image */}
      <div className="w-full lg:w-1/2">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={450}
          className="rounded-lg"
        />
      </div>

      <div className="flex flex-col space-y-4 lg:w-2/3">
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl font-semibold">
            {product.name}
          </h2>
          <div className="flex flex-col space-y-2">
            <p className="text-lg font-bold text-gray-800">
              {product.price}
            </p>
            <p className="text-sm text-red-500">
              {product.priceChange}
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-700">
          {product.description}
        </p>

        <div className="grid grid-cols-2 gap-2 text-sm mb-4 space-y-4 bg-slate-60 border border-gray-200 p-2">
          <div className="flex items-center space-x-4 mt-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/avatar.svg"
                width={32}
                height={32}
                alt="Author"
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">
                {product.author}
              </span>
              <span className="text-sm text-gray-600">
                {product.contract}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/avatar.svg"
                width={32}
                height={32}
                alt="Author"
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">
                {product.author}
              </span>
              <span className="text-sm text-gray-600">
                {product.contract}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm mt-4">
          <div className="flex flex-col justify-between font-semibold text-gray-500 space-y-2">
            <span>TRS Created:</span>
            <span>
              {product.trsCreated}
            </span>
          </div>
          <div className="flex flex-col justify-between font-semibold text-gray-500 space-y-2">
            <span>TRS Sold:</span>
            <span className="text-red-500">
              {product.trsSold} ({Math.round(
                product.trsSold / product.trsCreated * 100
              )}%)
            </span>
          </div>
          <div className="flex flex-col justify-between font-semibold text-gray-500 space-y-2">
            <span>Royalty Earned:</span>
            <span className="text-black">
              {product.royaltyEarned}
            </span>
          </div>
          <div className="flex flex-col justify-between font-semibold text-gray-500 space-y-2">
            <span>Price Range:</span>
            <span className="text-black">
              {product.priceRange}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
