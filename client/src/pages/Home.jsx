import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardItems from '../components/CardItems';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination/Pagination';
import Sort from '../components/Sort';
import { setCategoryId } from '../redux/slices/filterSlice.js';
import '../styles/Home.scss';

export default function Home({ searchValue }) {
	const categoryId = useSelector((state) => state.filter.categoryId);
	const dispatch = useDispatch();

	const [isLoading, setIsloading] = useState(false);
	const [pizzas, setPizzas] = useState([]);
	const [sortType, setSortType] = useState({
		name: 'популярности(DEwSC)',
		sortProperty: 'rating',
	});
	const [item, setItem] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [pageCount, setPageCount] = useState(1);

	console.log(currentPage, searchValue);
	useEffect(() => {
		setIsloading(true);
		const category = categoryId > 0 ? `category=${categoryId}` : '';
		const sortBy = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
		const order = sortType.sortProperty.replace('-', '');
		const search = searchValue ? `&search=${searchValue}` : '';

		fetch(
			`http://localhost:3001/?${category}&sortBy=${sortBy}&order=${order}${search}&page=${currentPage}&limit=${4}`,
		)
			.then((response) => response.json())
			.then((result) => {
				setPizzas(result.rows);
				setItem(result.count);
				setPageCount(Math.ceil(result.count / 4));
				setIsloading(false);
			})
			.catch((error) => console.error('fetch error', error));
		window.scrollTo(0, 0);
	}, [categoryId, sortType, searchValue, currentPage]);

	return (
		<div className='main'>
			<div className='maim__container _container'>
				<div className='main__menu'>
					<Categories
						categoryId={categoryId}
						onClickCategory={(i) => dispatch(setCategoryId(i))}
					/>
					<Sort sortType={sortType} setSortType={setSortType} />
				</div>
				<div className='main__content'>
					<div className='main__content__body'>
						<h1>Все пиццы</h1>
						<CardItems
							isLoading={isLoading}
							pizzas={pizzas}
							searchValue={searchValue}
						/>
					</div>
				</div>
				<Pagination
					pageCount={pageCount}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			</div>
		</div>
	);
}
