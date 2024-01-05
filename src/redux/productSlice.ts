import { createSlice } from "@reduxjs/toolkit";

export interface productState {
  products: Products[];
  categories: string[];
  brands: string[];
  sorts: string[];
}

interface Products {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}



const initialState: productState = {
  products: [],
  categories: [],
  brands: [],
  sorts: ["Choose", "A-Z", "Z-A", "Price Low to High", "Price High to Low"],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    alle: (state, action) => {
      (state.products = action.payload),
        state.products?.map((item) => {
          if (!state.categories.includes(item.category)) {
            state.categories.push(item.category);
          }
        });
      state.products?.forEach((item) => {
        if (!state.brands.includes(item.brand)) {
          state.brands.push(item.brand);
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { alle } = productSlice.actions;

export default productSlice.reducer;
