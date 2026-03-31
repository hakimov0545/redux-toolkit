import type { ReactNode } from "react";
import { OrderPage } from "../pages/OrderPage";
import { TodoPage } from "../pages/TodoPage";

export interface RouteConfig {
	path: string;
	element: ReactNode;
	label: string;
	icon: string;
}

export const routes: RouteConfig[] = [
	{
		path: "/",
		element: <OrderPage />,
		label: "Buyurtmalar",
		icon: "🛒",
	},
	{
		path: "/todo",
		element: <TodoPage />,
		label: "Vazifalar",
		icon: "✅",
	},
];
