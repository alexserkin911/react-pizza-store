import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filterSelector } from '../redux/filter/selectors';
import { setSortType } from '../redux/filter/slice';
import { Sort, SortListSortProperty } from '../redux/filter/types';
import Svgarrowup from '../svg/Svgarrowup.jsx';

export const sortList: Sort[] = [
	{
		name: 'популярности(DESC)',
		sortProperty: SortListSortProperty.RATING_DESC,
	},
	{ name: 'популярности(ASC)', sortProperty: SortListSortProperty.RATING_ASC },
	{ name: 'цене(DESC)', sortProperty: SortListSortProperty.PRICE_DESC },
	{ name: 'цене(ASC)', sortProperty: SortListSortProperty.PRICE_ASC },
	{ name: 'алфавиту(DESC)', sortProperty: SortListSortProperty.TITLE_DESC },
	{ name: 'алфавиту(ASC)', sortProperty: SortListSortProperty.TITLE_ASC },
];

export default React.memo(function Sort() {
	const { sortType } = useSelector(filterSelector);
	const dispatch = useDispatch();

	const sortRef = useRef<HTMLDivElement>(null);

	const [openPopup, setOpenPopup] = useState<boolean>(false);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
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
					{sortList.map((el, i) => (
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
});
