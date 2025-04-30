"use client";

import BuySellWidget from "@/components/common/marketplaceComponents/buySellWidget";
import ProductInfo from "@/components/common/marketplaceComponents/productInfo";
import { useState } from "react";

const product = {
  id: "1",
  name: "Light on Bone",
  description:
    "A kaleidoscope of memoir, theatre, fantasy, and gay stuff, A kaleidoscope of memoir, theatre, fantasy, and gay stuff, A kaleidoscope of memoir, theatre, fantasy, and gay stuff, A kaleidoscope of memoir, theatre, fantasy, and gay stuff.",
  price: "$122",
  priceChange: "-0.12%",
  category: "Misc",
  author: "Author's name",
  contract: "Contract standard",
  trsCreated: 1000,
  trsSold: 43,
  royaltyEarned: 54,
  priceRange: "$120 - $180",
  image: "/productImage.png"
};

export default function ProductLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="relative justify-between bg-white">
      <div className="relative flex flex-row justify-between space-x-8 bg-white">
        <ProductInfo product={product} />
        <BuySellWidget />
      </div>

      <main className="">
        {children}
      </main>
    </div>
  );
}
