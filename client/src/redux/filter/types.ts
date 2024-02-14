export enum SortListSortProperty {
	RATING_DESC = 'rating',
	PRICE_DESC = 'price',
	TITLE_DESC = 'title',
	RATING_ASC = '-rating',
	PRICE_ASC = '-price',
	TITLE_ASC = '-title',
}

export type Sort = {
	name: string;
	sortProperty: SortListSortProperty;
};

export interface IFilterSlice {
	categoryId: number;
	currentPage: number;
	sortType: Sort;
}
