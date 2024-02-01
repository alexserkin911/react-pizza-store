import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';
export default function Categories() {
	const categoryId = useSelector((state) => state.filter.categoryId);
	const dispatch = useDispatch();

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
					onClick={() => dispatch(setCategoryId(index))}
				>
					{el}
				</button>
			))}
		</div>
	);
}
