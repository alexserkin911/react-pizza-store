import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { getCartFromLS } from '../../utils/getCartFromLS';
import { CartItem, ICartSlice } from './types';

const cartData = getCartFromLS();

const initialState: ICartSlice = {
	totalPrice: cartData.totalPrice,
	items: cartData.items,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: initialState,
	reducers: {
		addItem(state, action: PayloadAction<CartItem>) {
			const findItem = state.items.find(
				(obj) =>
					obj.id === action.payload.id &&
					obj.size === action.payload.size &&
					obj.type === action.payload.type,
			);

			if (findItem) {
				findItem.count++;
			} else {
				state.items.push({ ...action.payload, count: 1 });
			}
			state.totalPrice = calcTotalPrice(state.items);
		},
		minusItem(state, action: PayloadAction<CartItem>) {
			const findItem = state.items.find(
				(obj) =>
					obj.id === action.payload.id &&
					obj.size === action.payload.size &&
					obj.type === action.payload.type,
			);

			if (findItem) {
				findItem.count--;
				state.totalPrice = calcTotalPrice(state.items);
			}
		},
		removeItem(state, action: PayloadAction<CartItem>) {
			state.items = state.items.filter(
				(el) =>
					!(
						el.id === action.payload.id &&
						el.size === action.payload.size &&
						el.type === action.payload.type
					),
			);
			state.totalPrice = calcTotalPrice(state.items);
		},
		clearItems(state) {
			state.items = [];
			state.totalPrice = 0;
		},
	},
});

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
