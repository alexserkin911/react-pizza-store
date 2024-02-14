import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterSelector } from '../redux/filter/selectors';
import { setCategoryId } from '../redux/filter/slice';

const categories = [
	'Все',
	'Мясные',
	'Вегетарианская',
	'Гриль',
	'Острые',
	'Закрытые',
];

export default React.memo(function Categories(): JSX.Element {
	const { categoryId } = useSelector(filterSelector);
	const dispatch = useDispatch();

	const handleCategoryClick = useCallback(
		(index: number) => {
			dispatch(setCategoryId(index));
		},
		[dispatch],
	);

	return (
		<div className='main__menu__buttons'>
			{categories.map((el, index) => (
				<button
					key={el}
					className={categoryId === index ? 'active' : ''}
					onClick={() => handleCategoryClick(index)}
				>
					{el}
				</button>
			))}
		</div>
	);
});
