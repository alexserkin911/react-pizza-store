import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFilterSlice, Sort, SortListSortProperty } from './types';

const initialState: IFilterSlice = {
	categoryId: 0,
	currentPage: 1,
	sortType: {
		name: 'популярности(DESC)',
		sortProperty: SortListSortProperty.RATING_DESC,
	},
};

const filterSlice = createSlice({
	name: 'filter',
	initialState: initialState,
	reducers: {
		setCategoryId(state, action: PayloadAction<number>) {
			state.categoryId = action.payload;
		},
		setSortType(state, action: PayloadAction<Sort>) {
			state.sortType = action.payload;
		},
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
		setFilters(state, action: PayloadAction<IFilterSlice>) {
			if (Object.keys(action.payload).length) {
				state.categoryId = Number(action.payload.categoryId);
				state.currentPage = Number(action.payload.currentPage);
				state.sortType = action.payload.sortType;
			} else {
				state.categoryId = 0;
				state.currentPage = 1;
				state.sortType = {
					name: 'популярности(DESC)',
					sortProperty: SortListSortProperty.RATING_DESC,
				};
			}
		},
	},
});

export const { setCategoryId, setSortType, setCurrentPage, setFilters } =
	filterSlice.actions;

export default filterSlice.reducer;
