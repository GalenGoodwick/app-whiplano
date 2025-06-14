/* eslint-disable */
"use client";
import DashboardArtisianBase from "@/modules/dashboard-artisian/dashboard-artisianBase";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/store"; export default function dashboardArtisian() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <DashboardArtisianBase />
      </PersistGate>

    </Provider>
  )
}