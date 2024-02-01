import qs from 'qs';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CardItems from '../components/CardItems';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination/Pagination';
import Sort, { sortPopup } from '../components/Sort';
import { setFilters } from '../redux/slices/filterSlice.js';

import { fetchPizzas } from '../redux/slices/pizzaSlice';
import '../styles/Home.scss';

export default function Home() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	// первый рендер страницы
	const isSearch = useRef(false);
	//первый рендер не сделан
	const isMounted = useRef(false);

	const { categoryId, sortType, currentPage, pageCount } = useSelector(
		(state) => state.filter,
	);
	const { searchValue } = useSelector((state) => state.search);

	const { items, status } = useSelector((state) => state.pizza);

	// если изменили параметры и был первый рендер
	useEffect(() => {
		// первый рендер не сделан не нужно вшивать параметры в адресную строку
		if (isMounted.current) {
			const queryString = qs.stringify({
				sortBy: sortType.sortProperty,
				categoryId,
				currentPage,
				pageCount,
			});
			navigate(`?${queryString}`);
		}
		isMounted.current = true;
	}, [categoryId, sortType.sortProperty, currentPage, navigate, pageCount]);

	// если был первый рендер то проверяем параметры URL и сохраняем в redux
	useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1));
			const sortType = sortPopup.find(
				(el) => el.sortProperty === params.sortBy,
			);
			dispatch(setFilters({ ...params, sortType }));
			isSearch.current = true;
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
							<CardItems pizzas={items} />
						)}
					</div>
				</div>
				<Pagination />
			</div>
		</div>
	);
}
