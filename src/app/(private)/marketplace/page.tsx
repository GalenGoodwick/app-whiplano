 
"use client";

import MarketplaceBase from "@/modules/marketplaceHome/components/marketplaceBase";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/store";

export default function MarketplacePage() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <MarketplaceBase />
      </PersistGate>
    </Provider>
  );
}
