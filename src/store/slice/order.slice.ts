import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { OrderState, IProduct } from "../../types";

const initialState: OrderState = {
	items: [],
};

export const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {
		add: (state, action: PayloadAction<IProduct>) => {
			const existingItem = state.items.find(
				(item) => item.product.id === action.payload.id,
			);

			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				state.items.push({
					product: action.payload,
					quantity: 1,
					price: Number(action.payload.price),
				});
			}
		},

		remove: (state, action: PayloadAction<string>) => {
			const item = state.items.find(
				(i) => i.product.id === action.payload,
			);

			if (!item) return;

			if (item.quantity > 1) {
				item.quantity -= 1;
			} else {
				state.items = state.items.filter(
					(i) => i.product.id !== action.payload,
				);
			}
		},

		deleteItem: (state, action: PayloadAction<string>) => {
			state.items = state.items.filter(
				(item) => item.product.id !== action.payload,
			);
		},

		clear: (state) => {
			state.items = [];
		},
	},
});

export const { add, remove, deleteItem, clear } = orderSlice.actions;
export default orderSlice.reducer;
