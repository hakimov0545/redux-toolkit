import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./slice/order.slice";
import todoReducer from "./slice/todo.slice";

export const store = configureStore({
	reducer: {
		order: orderReducer,
		todo: todoReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
