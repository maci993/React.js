import { createSlice } from "@reduxjs/toolkit";

const x = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState: x,
  reducers: {
    addToBasket: (state, action) => {
      console.log("action", action.payload.rating.count);
      const numberOfItems = action.payload.rating.count;
      const index = state.items.filter(
        (basketItem) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.items];
      console.log(state.items.find((item) => item.id === action.payload.id));

      state.items = [...state.items, action.payload];
    },
  },
});

export const { addToBasket } = basketSlice.actions;

export default basketSlice.reducer;
