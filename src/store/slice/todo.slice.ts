import { createSlice } from "@reduxjs/toolkit";
import type { ITodo, TodoState } from "../../types";

const initialState: TodoState = {
	todos: [],
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const newTodo: ITodo = {
				id: Date.now(),
				text: action.payload,
				completed: false,
			};
			state.todos.push(newTodo);
		},
		toggleTodo: (state, action) => {
			const todo = state.todos.find(
				(t) => t.id === action.payload,
			);
			if (todo) {
				todo.completed = !todo.completed;
			}
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter(
				(el) => el.id !== action.payload,
			);
		},
	},
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
