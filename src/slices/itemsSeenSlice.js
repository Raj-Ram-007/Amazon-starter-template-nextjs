import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const itemsSeenSlice = createSlice({
  name: "itemsSeen",
  initialState,
  reducers: {
    // Actions
    addToSeen: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const { addToSeen } = itemsSeenSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const SeenItems = (state) => state.itemsSeen.items;

export default itemsSeenSlice.reducer;
