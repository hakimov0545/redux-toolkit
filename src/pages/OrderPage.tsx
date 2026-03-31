import { Cart, ProductsDemo } from "../components";
import "../styles/Cart.css";

export const OrderPage = () => {
	return (
		<div className="app">
			<ProductsDemo />
			<Cart />
		</div>
	);
};
