import { combineReducers, configureStore } from "@reduxjs/toolkit";

import users from "../features/userSlice";
import counter from "../features/counterSlice";

const combinedReducers = combineReducers({
  counter,
  users,
});
