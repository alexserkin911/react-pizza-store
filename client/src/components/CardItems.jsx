import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';
import PizzaSkeleton from './PizzaSkeleton';

export default function CardItems({ pizzas }) {
	const { status } = useSelector((state) => state.pizza);

	const isLoading = status === 'loading';
	return (
		<div className='main__content__items'>
			{(isLoading ? [...new Array(7)] : pizzas).map((el, i) =>
				isLoading ? <PizzaSkeleton key={i} /> : <Item key={el.id} {...el} />,
			)}
		</div>
	);
}
