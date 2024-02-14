import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { cartItemByIdSelector } from '../redux/cart/selectors';
import { addItem } from '../redux/cart/slice';
import { CartItem } from '../redux/cart/types';
import { PizzaItem } from '../redux/pizza/types';
import SvgPlus from '../svg/SvgPlus';

const pizzaTypes = ['тонкое', 'традиционное'];
const pizzaSizes = [26, 30, 40];

export default function Item({
	id,
	imageUrl,
	title,
	description,
	types,
	sizes,
	price,
}: PizzaItem): JSX.Element {
	const dispatch = useDispatch();
	const cartItemsCount = useSelector(cartItemByIdSelector(id));
	const [activeType, setActiveType] = useState<number>(types[0]);
	const [activeSize, setActiveSize] = useState<number>(sizes[0]);

	const addedCount = cartItemsCount ? cartItemsCount : 0;

	const onClickAddItem = () => {
		const item: CartItem = {
			id,
			title,
			price,
			imageUrl,
			type: pizzaTypes[activeType],
			size: activeSize,
			count: 0,
		};
		dispatch(addItem(item));
	};

	return (
		<div className='pizza__card__body'>
			<div className='pizza-card'>
				<Link to={`/pizza/${id}`}>
					<img src={imageUrl} alt='pizza' />
					<h3>{title}</h3>
					<div className='pizza-card__description'>{description}</div>
				</Link>
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
