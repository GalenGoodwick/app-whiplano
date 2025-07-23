/* eslint-disable */

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { fetchMarketplaceData } from '@/api-handlers/services/marketplace.service';

// Redux
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { setProducts } from '@/store/productSlice';

interface Collection {
  collection_name: string;
  bid_price: number;
  number_of_trs: number;
  collection_data: {
    name: string;
    creator: string;
    description: string;
    number: number;
    image_uri: string;
    metadata_uri: string | null;
  }[];
}

interface TopMoversProps {
  showAuthor?: boolean;
  HeadingText?: string;
}

const TopMovers: React.FC<TopMoversProps> = ({ showAuthor = false, HeadingText = 'Top Movers' }) => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);
  const dispatch = useDispatch<AppDispatch>();

  // Detect screen size to update itemsToShow
  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsToShow(1); // mobile
      else if (width < 768) setItemsToShow(2); // sm
      else if (width < 1024) setItemsToShow(3); // md
      else setItemsToShow(4); // lg+
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMarketplaceData();
        setCollections(data);
        dispatch(setProducts(data));
      } catch (error) {
        console.error('Failed to load marketplace data');
      }
    };

    fetchData();
  }, [dispatch]);

  const goToNext = () => {
    if (currentIndex < collections.length - itemsToShow) {
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
          <h2 className="text-xl font-semibold">{HeadingText}</h2>
          <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">View all</a>
        </div>

        <div className="relative overflow-hidden">
          {/* Carousel Wrapper */}
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${(100 / itemsToShow) * currentIndex}%)`,
              width: `${(collections.length / itemsToShow) * 100}%`,
            }}
          >
            {collections.map((item, index) => {
              const product = item.collection_data?.[0];
              return (
                <div
                  key={index}
                  className="box-border px-2"
                  style={{ width: `${100 / itemsToShow}%` }}
                >
                  <Link href={`/marketplace/collection/${item.collection_name}`} passHref>
                    <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer  border-gray-200 border-2 h-full">
                      <div className="w-full h-32 mb-4 relative">
                        <Image
                          src={product?.image_uri || '/book.svg'}
                          alt={product?.name || 'Collection Image'}
                          width={300}
                          height={128}
                          className="rounded-md object-cover w-full h-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium text-gray-800 truncate">{item.collection_name}</h3>
                        <p className="text-lg font-semibold text-gray-900">${item.bid_price}</p>
                        <p className="text-sm text-gray-600">{item.number_of_trs || 0} / {product?.number} left</p>
                        <p className="text-sm text-green-500">↗ +1.2%</p>
                        {showAuthor && product?.creator && (
                          <div className="flex items-center mt-3 pt-3 border-t border-gray-100">
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                              <Image
                                src="/avatar.svg"
                                width={32}
                                height={32}
                                alt={product.creator}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="ml-2 text-xs font-medium text-gray-700 truncate">
                              {product.creator}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Prev Button */}
          {currentIndex > 0 && (
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              aria-label="Previous items"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          )}

          {/* Next Button */}
          {currentIndex < collections.length - itemsToShow && (
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              aria-label="Next items"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopMovers;
