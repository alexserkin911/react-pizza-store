import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISearchSlice } from './types';

const initialState: ISearchSlice = {
	searchValue: '',
};

const searchSlice = createSlice({
	name: 'search',
	initialState: initialState,
	reducers: {
		setSearchValue(state, action: PayloadAction<string>) {
			state.searchValue = action.payload;
		},
	},
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
