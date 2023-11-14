import React from 'react';
import pizzas from '../assets/pizzas.json';
import Item from './Item';

export default function CardItems() {
	return (
		<div className='main__content__items'>
			{pizzas.map((el) => (
				<Item key={el.id} {...el} />
			))}
		</div>
	);
}
