import { combineReducers } from "@reduxjs/toolkit"

import navReducer from "../slice/navSlice"


const rootReducer = combineReducers({
  navRed: navReducer,

})

export default rootReducer
