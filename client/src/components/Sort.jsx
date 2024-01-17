import React, { useState } from 'react';
import Svgarrowup from '../svg/Svgarrowup';

export default function Sort({ sortType, setSortType }) {
	const [openPopup, setOpenPopup] = useState(false);
	const sortPopup = [
		{ name: 'популярности(DESC)', sortProperty: 'rating' },
		{ name: 'популярности(ASC)', sortProperty: '-rating' },
		{ name: 'цене(DESC)', sortProperty: 'price' },
		{ name: 'цене(ASC)', sortProperty: '-price' },
		{ name: 'алфавиту(DESC)', sortProperty: 'title' },
		{ name: 'алфавиту(ASC)', sortProperty: '-title' },
	];
	return (
		<div className='main__menu__sort'>
			<Svgarrowup />
			<p>Сортировка по:</p>
			<span onClick={() => setOpenPopup(!openPopup)}>{sortType.name}</span>
			{openPopup && (
				<ul className='sort__popup'>
					{sortPopup.map((el, i) => (
						<li
							onClick={() => {
								setSortType(el);
								setOpenPopup(!openPopup);
							}}
							key={i}
						>
							{el.name}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
