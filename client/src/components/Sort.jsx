import React, { useState } from 'react';
import Svgarrowup from '../svg/Svgarrowup';

export default function Sort() {
	const [openPopup, setOpenPopup] = useState(false);
	const [selectedSort, setSelectedSort] = useState('популярности');
	const sortPopup = ['популярности', 'цене', ' алфавиту'];
	return (
		<div className='main__menu__sort'>
			<Svgarrowup />
			<p>Сортировка по:</p>
			<span onClick={() => setOpenPopup(!openPopup)}>{selectedSort}</span>
			{openPopup && (
				<ul className='sort__popup'>
					{sortPopup.map((el, i) => (
						<li
							onClick={() => {
								setSelectedSort(el);
								setOpenPopup(!openPopup);
							}}
							key={i}
						>
							{el}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
