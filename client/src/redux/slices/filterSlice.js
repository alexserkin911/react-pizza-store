import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	categoryId: 0,
	currentPage: 1,
	sortType: {
		name: 'популярности(DESC)',
		sortProperty: 'rating',
	},
};

const filterSlice = createSlice({
	name: 'filter',
	initialState: initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload;
		},
		setSortType(state, action) {
			state.sortType = action.payload;
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
		setFilters(state, action) {
			state.sortType = action.payload.sortType;
			state.categoryId = Number(action.payload.categoryId);
			state.currentPage = Number(action.payload.currentPage);
		},
	},
});

export const filterSelector = (state) => state.filter;

export const { setCategoryId, setSortType, setCurrentPage, setFilters } =
	filterSlice.actions;

export default filterSlice.reducer;
