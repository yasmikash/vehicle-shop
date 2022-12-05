import { configureStore } from "@reduxjs/toolkit";

import vehicleReducer from "./slices/vehicleSlice";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    vehicles: vehicleReducer,
    cart: cartReducer,
  },
});

export default store;
