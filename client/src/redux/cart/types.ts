export type CartItem = {
	id: number;
	price: number;
	title: string;
	type: string;
	size: number;
	count: number;
	imageUrl: string;
};

export interface ICartSlice {
	totalPrice: number;
	items: CartItem[];
}
