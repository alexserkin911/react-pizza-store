import React from 'react';
import Item from './Item';
import PizzaSkeleton from './PizzaSkeleton';

export default function CardItems({ isLoading, pizzas }) {
	return (
		<div className='main__content__items'>
			{(isLoading ? [...new Array(7)] : pizzas).map((el, i) =>
				isLoading ? <PizzaSkeleton key={i} /> : <Item key={el.id} {...el} />,
			)}
		</div>
	);
}
