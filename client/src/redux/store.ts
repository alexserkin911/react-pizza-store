import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import cart from './cart/slice';
import filter from './filter/slice';
import pizza from './pizza/slice';
import search from './search/slice';

export const store = configureStore({
	reducer: {
		filter,
		search,
		cart,
		pizza,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
