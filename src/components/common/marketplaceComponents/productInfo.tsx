'use client';

import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

interface ProductInfoProps {
  productName: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ productName }) => {
  const allProducts = useSelector((state: RootState) => state.products.allProducts);

  // Decode the URL component to match collection names with spaces
  const decodedName = decodeURIComponent(productName);
  const product = allProducts.find(p => p.collection_name === decodedName);
  const details = product?.collection_data?.[0];

  if (!product || !details) return <p>Product not found.</p>;

  return (
    <div className="flex flex-col lg:flex-row bg-white p-4 md:p-6 rounded-xl border border-gray-200 shadow-lg space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <Image
          src={details.image_uri || '/productImage.png'}
          alt={details.name}
          width={600}
          height={450}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Details Section */}
      <div className="flex flex-col space-y-4 w-full lg:w-2/3">
        {/* Header */}
        <div className="flex justify-between items-start flex-wrap">
          <h2 className="text-2xl font-semibold">{details.name}</h2>
          <div className="flex flex-col items-end">
            <p className="text-lg font-bold text-gray-800">${product.bid_price}</p>
            <p className="text-sm text-green-600">Live</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700">{details.description}</p>

        {/* Creator Info */}
        <div className="flex items-center space-x-4 border border-gray-200 p-3 rounded-lg">
          <Image
            src="/avatar.svg"
            width={32}
            height={32}
            alt="Author"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium">{details.creator}</span>
            <span className="text-xs text-gray-600">ERC-721</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 text-sm mt-2">
          <div className="flex flex-col font-semibold text-gray-500 space-y-1">
            <span>TRS Created:</span>
            <span className="text-black">{details.number}</span>
          </div>
          <div className="flex flex-col font-semibold text-gray-500 space-y-1">
            <span>TRS Left:</span>
            <span className="text-red-500">{product.number_of_trs}</span>
          </div>
          <div className="flex flex-col font-semibold text-gray-500 space-y-1">
            <span>Royalty Earned:</span>
            <span className="text-black">—</span>
          </div>
          <div className="flex flex-col font-semibold text-gray-500 space-y-1">
            <span>Price Range:</span>
            <span className="text-black">—</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
