import { configureStore } from "@reduxjs/toolkit";

import reducer from "../slice/reducer-slice";

export const store = configureStore({
	reducer: reducer,
	devTools: process.env.NODE_ENV !== "production",
});
