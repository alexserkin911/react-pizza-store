import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, cartItemByIdSelector } from '../redux/slices/cartSlice';
import SvgPlus from '../svg/SvgPlus';

export default function Item({
	id,
	imageUrl,
	title,
	description,
	types,
	sizes,
	price,
}) {
	const dispatch = useDispatch();
	const cartItem = useSelector(cartItemByIdSelector(id));
	const [activeType, setActiveType] = useState(types[0]);
	const [activeSize, setActiveSize] = useState(sizes[0]);
	const pizzaTypes = ['тонкое', 'традиционное'];
	const pizzaSizes = [26, 30, 40];

	const addedCount = cartItem ? cartItem.count : 0;

	const onClickAddItem = () => {
		const item = {
			id,
			title,
			price,
			imageUrl,
			type: pizzaTypes[activeType],
			size: activeSize,
		};
		dispatch(addItem(item));
	};

	return (
		<div className='pizza__card__body'>
			<div className='pizza-card'>
				<img src={imageUrl} alt='pizza' />
				<h3>{title}</h3>
				<div className='pizza-card__description'>{description}</div>
				<div className='pizza-card__selector'>
					<ul className='up-row'>
						{pizzaTypes.map((el, i) => (
							<li
								onClick={() => types.includes(i) && setActiveType(i)}
								className={`${activeType === i ? 'active' : ''} ${
									!types.includes(i) && 'inactive'
								}`}
								key={el}
							>
								{el}
							</li>
						))}
					</ul>
					<ul className='down-row'>
						{pizzaSizes.map((el) => (
							<li
								onClick={() => sizes.includes(el) && setActiveSize(el)}
								className={`${activeSize === el ? 'active' : ''} ${
									!sizes.includes(el) && 'inactive'
								}`}
								key={el}
							>
								{el} см.
							</li>
						))}
					</ul>
				</div>
				<div className='pizza-card__footer'>
					<div className='price'>от {price} ₽</div>
					<button onClick={onClickAddItem}>
						<SvgPlus />
						<p>Добавить</p>
						{addedCount > 0 && <span>{addedCount}</span>}
					</button>
				</div>
			</div>
		</div>
	);
}
