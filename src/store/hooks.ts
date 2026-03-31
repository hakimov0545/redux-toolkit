import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from ".";
import { addTodo, removeTodo, toggleTodo } from "./slice/todo.slice";
import type { IProduct } from "../types";
import { add, clear, deleteItem, remove } from "./slice/order.slice";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T>(
	selector: (state: RootState) => T,
): T => useSelector(selector);

export const useOrder = () => {
	const items = useAppSelector((state) => state.order.items);
	const dispatch = useAppDispatch();
	return {
		items,
		add: (product: IProduct) => dispatch(add(product)),
		remove: (id: string) => dispatch(remove(id)),
		deleteItem: (id: string) => dispatch(deleteItem(id)),
		clear: () => dispatch(clear()),
	};
};

export const useTodo = () => {
	const todos = useAppSelector((state) => state.todo.todos);
	const dispatch = useAppDispatch();
	return {
		todos,
		addTodo: (text: string) => dispatch(addTodo(text)),
		toggleTodo: (id: number) => dispatch(toggleTodo(id)),
		removeTodo: (id: number) => dispatch(removeTodo(id)),
	};
};
