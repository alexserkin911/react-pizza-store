import React, { useEffect, useState } from 'react';
import Item from './Item';
import PizzaSkeleton from './PizzaSkeleton';

export default function CardItems() {
	const [isLoading, setIsloading] = useState(false);
	const [pizzas, setPizzas] = useState([]);

	useEffect(() => {
		setIsloading(true);

		fetch('http://localhost:3001/')
			.then((response) => response.json())
			.then((result) => {
				setPizzas(result);
				setIsloading(false);
			})
			.catch((error) => console.error('fetch error', error));
	}, []);

	console.log(pizzas);
	return (
		<div className='main__content__items'>
			{(isLoading ? [...new Array(7)] : pizzas).map((el, i) =>
				isLoading ? <PizzaSkeleton key={i} /> : <Item key={el.id} {...el} />,
			)}
		</div>
	);
}
