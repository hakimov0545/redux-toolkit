import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import "../styles/Cart.css";

export const Cart = () => {
	return (
		<div className="cart-container">
			<header className="cart-header">
				<h1>🛒 Savat</h1>
				<p>Sizning xaridlaringiz</p>
			</header>

			<div className="cart-content">
				<div className="cart-main">
					<CartList />
				</div>
				<aside className="cart-sidebar">
					<CartSummary />
				</aside>
			</div>
		</div>
	);
};
