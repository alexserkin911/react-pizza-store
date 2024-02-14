import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchPizzas } from './asyncAction';
import { IPizzaSlice, PizzaItem, Status } from './types';

const initialState: IPizzaSlice = {
	items: [],
	status: Status.LOADING,
	totalPages: 1,
};

const pizzaSlice = createSlice({
	name: 'pizza',
	initialState: initialState,
	reducers: {
		setItems(state, action: PayloadAction<PizzaItem[]>) {
			state.items = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPizzas.pending, (state) => {
				state.status = Status.LOADING;
				state.items = [];
			})
			.addCase(fetchPizzas.fulfilled, (state, action) => {
				state.status = Status.SUCCESS;
				state.items = action.payload.rows;
				state.totalPages = Math.ceil(action.payload.count / 4);
			})
			.addCase(fetchPizzas.rejected, (state) => {
				state.status = Status.FAILED;
				state.items = [];
			});
	},
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
