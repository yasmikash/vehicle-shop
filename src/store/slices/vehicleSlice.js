import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initState = { vehicles: [], loading: null, error: null };

export const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVehciles.fulfilled, (state, action) => {
      state.vehicles = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchVehciles.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
  },
});

export const fetchVehciles = createAsyncThunk(
  "vehicles/fetchVehicles",
  async (selectedBrand) => {
    let response;

    if (selectedBrand === null) {
      response = await fetch("http://157.245.61.32:7979/vehicles");
    } else {
      response = await fetch(
        `http://157.245.61.32:7979/vehicles?details.brand=${selectedBrand}`
      );
    }

    const data = await response.json();
    return data;
  }
);

export const selectVehicles = (state) => state.vehicles.vehicles;

export default vehiclesSlice.reducer;
