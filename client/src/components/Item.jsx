import React, { useState } from 'react';
import SvgPlus from '../svg/SvgPlus';

export default function Item({
	imageUrl,
	title,
	description,
	types,
	sizes,
	price,
	category,
	rating,
}) {
	const [activeType, setActiveType] = useState(types[0]);
	const [activeSize, setActiveSize] = useState(sizes[0]);
	const pizzaTypes = ['тонкое', 'традиционное'];
	const pizzaSizes = [26, 30, 40];

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
					<button>
						<SvgPlus />
						<p>Добавить</p>
						<span>3</span>
					</button>
				</div>
			</div>
		</div>
	);
}
