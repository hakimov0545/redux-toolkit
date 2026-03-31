import { useDispatch } from "react-redux";
import { add, remove, deleteItem } from "../store/slice/order.slice";
import type { ItemInterface } from "../types";
import "../styles/CartItem.css";

interface CartItemProps {
	item: ItemInterface;
}

export const CartItem = ({ item }: CartItemProps) => {
	const dispatch = useDispatch();

	const handleIncrease = () => {
		dispatch(add(item.product));
	};

	const handleRemove = () => {
		dispatch(remove(item.product.id));
	};

	const handleDelete = () => {
		dispatch(deleteItem(item.product.id));
	};

	return (
		<div className="cart-item">
			<div className="item-info">
				<h3>{item.product.title}</h3>
				<p className="description">
					{item.product.description}
				</p>
				<p className="price">
					Narxi:{" "}
					<strong>
						${Number(item.product.price).toFixed(2)}
					</strong>
				</p>
			</div>

			<div className="item-controls">
				<div className="quantity-control">
					<button
						className="btn-quantity"
						onClick={handleRemove}
						title="Miqdorni kamaytirish"
					>
						−
					</button>
					<span className="quantity">{item.quantity}</span>
					<button
						className="btn-quantity"
						onClick={handleIncrease}
						title="Miqdorni ortirish"
					>
						+
					</button>
				</div>

				<div className="item-total">
					Jami:{" "}
					<strong>
						${(item.price * item.quantity).toFixed(2)}
					</strong>
				</div>

				<button
					className="btn-delete"
					onClick={handleDelete}
					title="Olib tashlash"
				>
					🗑️ Olib tashlash
				</button>
			</div>
		</div>
	);
};
