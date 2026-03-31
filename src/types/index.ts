export interface IProduct {
	id: string;
	title: string;
	price: number;
	description: string;
}

export interface ItemInterface {
	product: IProduct;
	quantity: number;
	price: number;
}

export interface OrderState {
	items: ItemInterface[];
}

export interface ITodo {
	id: number;
	text: string;
	completed: boolean;
}

export interface TodoState {
	todos: ITodo[];
}
