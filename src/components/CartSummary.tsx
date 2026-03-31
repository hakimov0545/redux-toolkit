import "../styles/CartSummary.css";
import { useOrder } from "../store/hooks";

export const CartSummary = () => {
	const { items, clear } = useOrder();

	const totalItems = items.reduce(
		(sum, item) => sum + item.quantity,
		0,
	);
	const totalPrice = items.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0,
	);

	const handleCheckout = () => {
		if (items.length === 0) {
			alert("Savat bo'sh! Mahsulot qo'shing.");
			return;
		}
		alert(
			`Buyurtma qabul qilindi! Jami: $${totalPrice.toFixed(2)}`,
		);
	};

	const handleClear = () => {
		if (items.length === 0) return;
		if (confirm("Savatni tozalamoqchimiz?")) {
			clear();
		}
	};

	return (
		<div className="cart-summary">
			<div className="summary-card">
				<h2>Savat Xulosasi</h2>

				<div className="summary-row">
					<span>Mahsulotlar soni:</span>
					<strong>{totalItems}</strong>
				</div>

				<div className="summary-row">
					<span>Jami qiymat:</span>
					<strong className="total-price">
						${totalPrice.toFixed(2)}
					</strong>
				</div>

				<div className="summary-row">
					<span>Yetkazib berish:</span>
					<strong>Bepul</strong>
				</div>

				<div className="summary-divider"></div>

				<div className="summary-row total">
					<span>Umumiy jami:</span>
					<strong className="grand-total">
						${totalPrice.toFixed(2)}
					</strong>
				</div>

				<div className="summary-actions">
					<button
						className="btn-checkout"
						onClick={handleCheckout}
						disabled={items.length === 0}
					>
						To'lov 💳
					</button>
					<button
						className="btn-clear"
						onClick={handleClear}
						disabled={items.length === 0}
					>
						Savatni tozalash 🗑️
					</button>
				</div>
			</div>
		</div>
	);
};
