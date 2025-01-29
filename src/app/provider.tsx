// app/providers.tsx
"use client"; // This is a Client Component

import { store } from "@/store/store";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}