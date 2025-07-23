 
"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/store";

import BuySellWidget from "@/components/common/marketplaceComponents/buySellWidget";
import ProductInfo from "@/components/common/marketplaceComponents/productInfo";
import { useParams } from "next/navigation";

const ProductDetailPageContent = () => {
  const params = useParams();
  const productName = params?.name as string;

  return (
    <div className="w-full py-8">
      <ProductInfo productName={productName} />
      <BuySellWidget />
    </div>
  );
};

const ProductDetailPage = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <ProductDetailPageContent />
      </PersistGate>
    </Provider>
  );
};

export default ProductDetailPage;
