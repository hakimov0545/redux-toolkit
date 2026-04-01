import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { TodoPage } from "../pages/TodoPage";
import todoReducer from "../store/slice/todo.slice";

const renderWithStore = () => {
	const store = configureStore({
		reducer: { todo: todoReducer },
	});
	render(
		<Provider store={store}>
			<TodoPage />
		</Provider>,
	);
};

describe("TodoPage", () => {
	it("yangi todo qoshish", async () => {
		renderWithStore();
		const user = userEvent.setup();

		const input = screen.getByPlaceholderText(
			"Yangi vazifa qo'shish...",
		);
		await user.type(input, "Yangi todo");
		await user.click(screen.getByText("➕ Qo'shish"));

		expect(screen.getByText("Yangi todo")).toBeInTheDocument();
	});

	it("todo toggle", async () => {
		renderWithStore();
		const user = userEvent.setup();

		const input = screen.getByPlaceholderText(
			"Yangi vazifa qo'shish...",
		);
		await user.type(input, "Yangi todo");
		await user.click(screen.getByText("➕ Qo'shish"));

		const checkbox = screen.getByRole("checkbox");
		await user.click(checkbox);

		const todoItem = screen
			.getByText("Yangi todo")
			.closest(".todo-item");
		expect(todoItem).toHaveClass("completed");
	});
});
