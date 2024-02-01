import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortType } from '../redux/slices/filterSlice.js';
import Svgarrowup from '../svg/Svgarrowup';

export const sortPopup = [
	{ name: 'популярности(DESC)', sortProperty: 'rating' },
	{ name: 'популярности(ASC)', sortProperty: '-rating' },
	{ name: 'цене(DESC)', sortProperty: 'price' },
	{ name: 'цене(ASC)', sortProperty: '-price' },
	{ name: 'алфавиту(DESC)', sortProperty: 'title' },
	{ name: 'алфавиту(ASC)', sortProperty: '-title' },
];

export default function Sort() {
	const { sortType } = useSelector((state) => state.filter);
	const dispatch = useDispatch();

	const sortRef = useRef();

	const [openPopup, setOpenPopup] = useState(false);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (!sortRef.current.contains(event.target)) {
				setOpenPopup(false);
			}
		};
		document.body.addEventListener('click', handleClickOutside);

		return () => {
			document.body.removeEventListener('click', handleClickOutside);
		};
	}, []);

	return (
		<div ref={sortRef} className='main__menu__sort'>
			<Svgarrowup />
			<p>Сортировка по:</p>
			<span onClick={() => setOpenPopup(!openPopup)}>{sortType.name}</span>
			{openPopup && (
				<ul className='sort__popup'>
					{sortPopup.map((el, i) => (
						<li
							onClick={() => {
								dispatch(setSortType(el));
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
