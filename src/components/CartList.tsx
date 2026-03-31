import { CartItem } from "./CartItem";
import "../styles/CartList.css";
import { useOrder } from "../store/hooks";

export const CartList = () => {
	const { items } = useOrder();

	if (items.length === 0) {
		return (
			<div className="cart-empty">
				<div className="empty-icon">🛒</div>
				<h2>Savat bo'sh</h2>
				<p>
					Hozircha savatingizda hech narsa yo'q. Mahsulot
					qo'shdan boshlang!
				</p>
			</div>
		);
	}

	return (
		<div className="cart-list">
			<div className="items-header">
				<h2>Savatdagi mahsulotlar ({items.length})</h2>
			</div>
			<div className="items-container">
				{items.map((item) => (
					<CartItem key={item.product.id} item={item} />
				))}
			</div>
		</div>
	);
};
