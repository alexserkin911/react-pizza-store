import qs from 'qs';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CardItems from '../components/CardItems';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination/Pagination';
import Sort, { sortList } from '../components/Sort';

import { filterSelector } from '../redux/filter/selectors';
import { setFilters } from '../redux/filter/slice';
import { fetchPizzas } from '../redux/pizza/asyncAction';
import { pizzaSelector } from '../redux/pizza/selectors';
import { FetchProps } from '../redux/pizza/types';
import { searchSelector } from '../redux/search/selectors';
import { useAppDispatch } from '../redux/store';
import '../styles/Home.scss';

export default function Home(): JSX.Element {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	// первый рендер страницы
	const isSearch = useRef(false);
	//первый рендер не сделан
	const isMounted = useRef(false);

	const { categoryId, sortType, currentPage } = useSelector(filterSelector);
	const { status } = useSelector(pizzaSelector);
	const { searchValue } = useSelector(searchSelector);

	// если изменили параметры и был первый рендер
	useEffect(() => {
		// первый рендер не сделан не нужно вшивать параметры в адресную строку
		if (isMounted.current) {
			const queryString = qs.stringify({
				sortBy: sortType.sortProperty,
				category: categoryId,
				currentPage,
			});
			navigate(`?${queryString}`);
		}
		isMounted.current = true;
	}, [categoryId, sortType.sortProperty, currentPage, navigate]);

	// если был первый рендер то проверяем параметры URL и сохраняем в redux
	useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(
				window.location.search.substring(1),
			) as unknown as FetchProps;
			const sortTypeEl = sortList.find(
				(el) => el.sortProperty === params.sortBy,
			);
			if (sortTypeEl) {
				dispatch(
					setFilters({
						categoryId: Number(params.category),
						currentPage: Number(params.currentPage),
						sortType: sortTypeEl,
					}),
				);

				isSearch.current = true;
			}
		}
	}, [dispatch]);

	// Если был первый рендер то запрашиваем пиццы
	useEffect(() => {
		const getPizzas = async () => {
			const category = categoryId > 0 ? `category=${categoryId}` : '';
			const sortBy = sortType.sortProperty.replace('-', '');
			const orderBy = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
			const search = searchValue ? `&search=${searchValue}` : '';

			dispatch(fetchPizzas({ category, sortBy, orderBy, search, currentPage }));
		};
		window.scrollTo(0, 0);

		if (!isSearch.current) {
			getPizzas();
		}
		isSearch.current = false;
	}, [categoryId, sortType.sortProperty, currentPage, dispatch, searchValue]);

	return (
		<div className='main'>
			<div className='maim__container _container'>
				<div className='main__menu'>
					<Categories />
					<Sort />
				</div>
				<div className='main__content'>
					<div className='main__content__body'>
						<h1>Все пиццы</h1>
						{status === 'failed' ? (
							<div className='main__content__body__failed'>
								<h1>Произошла ошибка 😕</h1>
								<p>
									К сожалению, не удалось получить пиццы. <br />
									Попробуйте повторить позже.
								</p>
							</div>
						) : (
							<CardItems />
						)}
					</div>
				</div>
				<Pagination />
			</div>
		</div>
	);
}
