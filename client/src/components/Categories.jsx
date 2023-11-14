import React, { useState } from 'react';

export default function Categories() {
	const [activeButton, setActiveButton] = useState(0);
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
					className={activeButton === index ? 'active' : ''}
					onClick={() => setActiveButton(index)}
				>
					{el}
				</button>
			))}
		</div>
	);
}
