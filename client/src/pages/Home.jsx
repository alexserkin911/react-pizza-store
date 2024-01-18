import React, { useEffect, useState } from 'react';
import CardItems from '../components/CardItems';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination/Pagination';
import Sort from '../components/Sort';
import '../styles/Home.scss';

export default function Home({ searchValue }) {
	const [isLoading, setIsloading] = useState(false);
	const [pizzas, setPizzas] = useState([]);
	const [categoryId, setCategoryId] = useState(0);
	const [sortType, setSortType] = useState({
		name: 'популярности(DESC)',
		sortProperty: 'rating',
	});
	console.log(sortType);
	console.log(pizzas);

	useEffect(() => {
		setIsloading(true);
		const category = categoryId > 0 ? `category=${categoryId}` : '';
		const sortBy = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
		const order = sortType.sortProperty.replace('-', '');
		const search = searchValue ? `&search=${searchValue}` : '';

		fetch(
			`http://localhost:3001/?${category}&sortBy=${sortBy}&order=${order}${search}&page=1&limit=4`,
		)
			.then((response) => response.json())
			.then((result) => {
				setPizzas(result);
				setIsloading(false);
			})
			.catch((error) => console.error('fetch error', error));
		window.scrollTo(0, 0);
	}, [categoryId, sortType, searchValue]);

	return (
		<div className='main'>
			<div className='maim__container _container'>
				<div className='main__menu'>
					<Categories
						categoryId={categoryId}
						onClickCategory={(i) => setCategoryId(i)}
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
				<Pagination />
			</div>
		</div>
	);
}
