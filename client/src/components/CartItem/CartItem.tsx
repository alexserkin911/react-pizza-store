import React from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as IncrementSvg } from '../../assets/svg/btn-decrement.svg';
import { ReactComponent as DecrementSvg } from '../../assets/svg/btn-increment.svg';
import { ReactComponent as RemoveSvg } from '../../assets/svg/btn-remove.svg';
import { addItem, minusItem, removeItem } from '../../redux/cart/slice';

type CartItemProps = {
	id: number;
	price: number;
	title: string;
	type: string;
	size: number;
	count: number;
	imageUrl: string;
};

export const CartItem: React.FC<CartItemProps> = ({
	id,
	price,
	title,
	type,
	size,
	count,
	imageUrl,
}) => {
	const dispatch = useDispatch();

	const onClickPlus = () => {
		dispatch(addItem({ id, price, title, type, size, count, imageUrl }));
	};

	const onClickMinus = () => {
		dispatch(minusItem({ id, price, title, type, size, count, imageUrl }));
	};

	const onClickRemove = () => {
		dispatch(removeItem({ id, price, title, type, size, count, imageUrl }));
		console.log(id, type, size);
	};

	return (
		<div className='cart__content__body'>
			<div className='cart__content__left'>
				<img src={imageUrl} alt='pizza' />
				<div>
					<h1>{title}</h1>
					<p>
						{type}, {size} см.
					</p>
				</div>
			</div>
			<div className='cart__content__right'>
				<div>
					<button disabled={count === 1} className='cart__item__minus'>
						<DecrementSvg onClick={onClickMinus} />
					</button>
					<span>{count}</span>
					<button>
						<IncrementSvg onClick={onClickPlus} />
					</button>
				</div>
				<span>{price * count} ₽ </span>
				<RemoveSvg onClick={onClickRemove} />
			</div>
		</div>
	);
};
