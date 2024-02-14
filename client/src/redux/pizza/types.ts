export type PizzaItem = {
	id: number;
	title: string;
	description: string;
	price: number;
	imageUrl: string;
	rating: number;
	types: number[];
	sizes: number[];
};

export type FetchProps = {
	category: string;
	sortBy: string;
	orderBy: string;
	search: string;
	currentPage: number;
};

export enum Status {
	LOADING = 'loading',
	SUCCESS = 'succeeded',
	FAILED = 'failed',
}

export interface IPizzaSlice {
	items: PizzaItem[];
	status: Status;
	totalPages: number;
}

export interface FetchPizzasResponse {
	rows: PizzaItem[];
	count: number;
}
