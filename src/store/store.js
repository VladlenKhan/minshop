import { configureStore } from "@reduxjs/toolkit";
import { categoryApi } from "./middleWares/categoryApi";

export const store = configureStore({
	reducer: {
		[categoryApi.reducerPath]: categoryApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([categoryApi.middleware]),
});
