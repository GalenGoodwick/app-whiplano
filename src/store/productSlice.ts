import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CollectionData {
  name: string;
  creator: string;
  description: string;
  number: number;
  image_uri: string;
  metadata_uri: string | null;
}

interface Collection {
  collection_name: string;
  bid_price: number;
  number_of_trs: number;
  collection_data: CollectionData[];
}

interface ProductState {
  allProducts: Collection[];
}

const initialState: ProductState = {
  allProducts: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Collection[]>) => {
      state.allProducts = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
