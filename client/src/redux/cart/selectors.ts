import { RootState } from '../store';

export const cartSelector = (state: RootState) => state.cart;
export const cartItemByIdSelector = (id: number) => (state: RootState) =>
	state.cart.items
		.filter((obj) => obj.id === id)
		.reduce((acc, el) => acc + el.count, 0);
