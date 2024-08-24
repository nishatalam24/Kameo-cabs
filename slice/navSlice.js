import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navTruthy: false,
//   navTruthy: false,
//   token: null, // Initialize with null since loading from AsyncStorage is async
};


const navSlice = createSlice({
    name: "navSlice",
    initialState,
    reducers: {
        setNavTruthy: (state, action) => {
        state.navTruthy = action.payload;
      },
   
    },
  });
  
  export const { setNavTruthy } = navSlice.actions;
  export default navSlice.reducer;