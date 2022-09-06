import create from "zustand";
import { persist } from "zustand/middleware";
import { CartSlice, createCartSlice } from "./slices/createCartSlice";

import { createProductSlice, ProductSlice } from "./slices/createProductSlice";

type StoreState = ProductSlice & CartSlice;

export const useAppStore = create<StoreState>()(
  persist((...a) => ({
    ...createProductSlice(...a),
    ...createCartSlice(...a),
  }))
);
