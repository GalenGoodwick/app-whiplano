/* eslint-disable */

import APIAxios from "../ApiAxios";

export interface CollectionData {
  name: string;
  creator: string;
  description: string;
  number: number;
  image_uri: string;
  metadata_uri: string | null;
}

export interface MarketplaceProduct {
  collection_name: string;
  bid_price: number;
  number_of_trs: number;
  collection_data?: CollectionData[]; // optional for flexibility
}

// Multiple collections (like homepage listing)
export const fetchMarketplaceData = async (): Promise<any> => {
  try {
    const response = await APIAxios.get('/marketplace');
    return response.data;
  } catch (error) {
    console.error('Error fetching marketplace data:', error);
    throw error;
  }
}
// Single product detail by collection_name
export const fetchMarketplaceProduct = async (
  collection_name: string
): Promise<MarketplaceProduct> => {
  try {
    const response = await APIAxios.get('/marketplace/collection', {
      params: { collection_name },
    });

    // If the API returns an array (as you showed before), return the first item
    const data = response.data;

    if (Array.isArray(data)) {
      if (data.length === 0) throw new Error("No product found for given collection_name");
      return data[0];
    }

    return data;
  } catch (error) {
    console.error('Error fetching marketplace product:', error);
    throw error;
  }
};
