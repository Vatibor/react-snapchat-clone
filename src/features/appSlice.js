import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },

});

export const { incrementByAmount } = appSlice.actions;

export const selectApp = (state) => state.app.value;


export default appSlice.reducer;