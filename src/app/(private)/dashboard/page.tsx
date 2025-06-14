/* eslint-disable */
"use client";

import DashboardHomeBase from "@/modules/dashboardHome/components/dashboardHomeBase";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/store";

export default function DashboardPage() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <DashboardHomeBase />
      </PersistGate>
    </Provider>
  );
}
