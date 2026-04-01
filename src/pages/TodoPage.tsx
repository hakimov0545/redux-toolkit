import { useState } from "react";
import "../styles/TodoPage.css";
import { useTodo } from "../store/hooks";

export const TodoPage = () => {
	const [input, setInput] = useState("");
	const { todos, addTodo, removeTodo, toggleTodo } = useTodo();

	const handleAddTodo = () => {
		if (input.trim()) {
			addTodo(input);
			setInput("");
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			handleAddTodo();
		}
	};

	const completedCount = todos.filter((t) => t.completed).length;

	return (
		<div className="todo-container">
			<header className="todo-header">
				<h1>✅ Todolar</h1>
				<p>Bugungi todolar</p>
			</header>

			<div className="todo-content">
				<div className="todo-main">
					<div className="todo-input-section">
						<div className="input-wrapper">
							<input
								type="text"
								value={input}
								onChange={(e) =>
									setInput(e.target.value)
								}
								onKeyDown={handleKeyPress}
								placeholder="Yangi vazifa qo'shish..."
								className="todo-input"
							/>
							<button
								onClick={handleAddTodo}
								className="add-btn"
							>
								➕ Qo'shish
							</button>
						</div>
					</div>

					<div className="todo-list">
						{todos.length === 0 ? (
							<div className="empty-state">
								<p>Hali vazifa yo'q</p>
								<p className="text-muted">
									Yangi vazifa qo'shib boshla
								</p>
							</div>
						) : (
							todos.map((todo) => (
								<div
									key={todo.id}
									className={`todo-item ${todo.completed ? "completed" : ""}`}
								>
									<input
										type="checkbox"
										checked={todo.completed}
										onChange={() =>
											toggleTodo(todo.id)
										}
										className="todo-checkbox"
									/>
									<span className="todo-text">
										{todo.text}
									</span>
									<button
										onClick={() =>
											removeTodo(todo.id)
										}
										className="delete-btn"
										title="O'chirish"
									>
										🗑️
									</button>
								</div>
							))
						)}
					</div>
				</div>

				<aside className="todo-sidebar">
					<div className="todo-summary">
						<h3>Statistika</h3>
						<div className="stat-item">
							<span className="stat-label">
								Jami vazifa:
							</span>
							<span className="stat-value">
								{todos.length}
							</span>
						</div>
						<div className="stat-item">
							<span className="stat-label">
								Bajarilgan:
							</span>
							<span className="stat-value completed-text">
								{completedCount}
							</span>
						</div>
						<div className="stat-item">
							<span className="stat-label">
								Qolgan:
							</span>
							<span className="stat-value pending-text">
								{todos.length - completedCount}
							</span>
						</div>
						{todos.length > 0 && (
							<div className="progress-bar">
								<div
									className="progress-fill"
									style={{
										width: `${(completedCount / todos.length) * 100}%`,
									}}
								/>
							</div>
						)}
					</div>
				</aside>
			</div>
		</div>
	);
};
