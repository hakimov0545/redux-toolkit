import type { IProduct } from "../types";
import "../styles/ProductsDemo.css";
import { useOrder } from "../store/hooks";

const DEMO_PRODUCTS: IProduct[] = [
	{
		id: "1",
		title: "Laptop",
		price: 999.99,
		description: "Zamonaviy va kulli kuch bilan",
	},
	{
		id: "2",
		title: "Smartfon",
		price: 599.99,
		description: "Eng yangi texnologiya",
	},
	{
		id: "3",
		title: "Naushniklar",
		price: 199.99,
		description: "Sifatli ovoz tizimi",
	},
	{
		id: "4",
		title: "Kamera",
		price: 1299.99,
		description: "4K video yozish imkoniyati",
	},
	{
		id: "5",
		title: "Monitor",
		price: 349.99,
		description: "UHD display texnologiyasi",
	},
];

export const ProductsDemo = () => {
	const { add } = useOrder();

	const handleAddToCart = (product: IProduct) => {
		add(product);
		alert(`"${product.title}" savatga qo'shildi!`);
	};

	return (
		<div className="products-section">
			<h2>Mahsulotlar Katalogi</h2>
			<div className="products-grid">
				{DEMO_PRODUCTS.map((product) => (
					<div key={product.id} className="product-card">
						<div className="product-header">
							<h3>{product.title}</h3>
							<span className="badge">Yangi</span>
						</div>
						<p className="product-description">
							{product.description}
						</p>
						<div className="product-footer">
							<span className="price">
								${Number(product.price).toFixed(2)}
							</span>
							<button
								className="btn-add-to-cart"
								onClick={() =>
									handleAddToCart(product)
								}
							>
								Savatga qo'sh
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
