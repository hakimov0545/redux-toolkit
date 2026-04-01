import { describe, it, expect } from "vitest";
import todoReducer, {
	addTodo,
	toggleTodo,
	removeTodo,
} from "../store/slice/todo.slice";

describe("todoSlice", () => {
	it("addTodo yangi todo qo`shishi kerak", () => {
		const initialState = { todos: [] };

		const action = addTodo("Test todo");
		const newState = todoReducer(initialState, action);

		expect(newState.todos).toHaveLength(1);
		expect(newState.todos[0].text).toBe("Test todo");
		expect(newState.todos[0].completed).toBe(false);
	});

	it("toggleTodo todo holatini ozgartirishi kerak", () => {
		const initialState = {
			todos: [{ id: 1, text: "Test todo", completed: false }],
		};
		const action = toggleTodo(1);
		const newState = todoReducer(initialState, action);

		expect(newState.todos[0].completed).toBe(true);
	});

	it("removeTodo todoni ochirishi kerak", () => {
		const initialState = {
			todos: [{ id: 1, text: "Test todo", completed: false }],
		};
		const action = removeTodo(1);
		const newState = todoReducer(initialState, action);

		expect(newState.todos).toHaveLength(0);
	});
});
