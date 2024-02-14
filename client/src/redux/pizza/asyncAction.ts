import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchPizzasResponse, FetchProps } from './types';

export const fetchPizzas = createAsyncThunk<FetchPizzasResponse, FetchProps>(
	'pizza/fetchByPizzasStatus',
	async ({ category, sortBy, orderBy, search, currentPage }: FetchProps) => {
		const { data } = await axios.get<FetchPizzasResponse>(
			`http://localhost:3001/?${category}&sortBy=${sortBy}&orderBy=${orderBy}${search}&page=${currentPage}&limit=${4}`,
		);
		return data;
	},
);
