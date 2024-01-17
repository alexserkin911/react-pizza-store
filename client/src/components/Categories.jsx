import React, { useState } from 'react';

export default function Categories({ categoryId, onClickCategory }) {
	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	];

	return (
		<div className='main__menu__buttons'>
			{categories.map((el, index) => (
				<button
					key={el}
					className={categoryId === index ? 'active' : ''}
					onClick={() => onClickCategory(index)}
				>
					{el}
				</button>
			))}
		</div>
	);
}
