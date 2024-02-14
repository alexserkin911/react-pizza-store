import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Cartsvg } from '../assets/svg/cart.svg';
import { ReactComponent as ShoppingCartSvg } from '../assets/svg/shopping-cart.svg';
import { CartItem } from '../components/CartItem/CartItem';
import { clearItems } from '../redux/cart/slice';

import BackButton from '../components/BackButton/BackButton';
import { cartSelector } from '../redux/cart/selectors';
import '../styles/Cart.scss';
import NotFound from './NotFound';

export default function Cart() {
	const { totalPrice, items } = useSelector(cartSelector);
	const dispatch = useDispatch();

	const totalCount = items.reduce((sum: number, obj) => sum + obj.count, 0);

	const onClickClear = () => {
		dispatch(clearItems());
	};

	if (!totalPrice) {
		return <NotFound />;
	}

	return (
		<div className='cart'>
			<div className='cart_container _container'>
				<div className='cart__body'>
					<div className='cart__header'>
						<h1>
							<ShoppingCartSvg /> Корзина
						</h1>
						<button onClick={onClickClear}>
							<Cartsvg className='icon' />
							<span>Очистить корзину</span>
						</button>
					</div>
					<div className='cart__content'>
						{items.map((el, i) => (
							<CartItem key={i} {...el} />
						))}
					</div>
					<div className='cart__footer'>
						<div className='cart__footer__total'>
							<div className='total'>
								<p>Всего пицц:</p>
								<span>{totalCount} шт.</span>
							</div>
							<div className='amount'>
								<p>Сумма заказа:</p>
								<span>{totalPrice} ₽</span>
							</div>
						</div>
						<div className='delivery'>
							<p>введите имя и адрес доставки</p>
							<ul>
								<input
									type='text'
									name='name'
									placeholder='имя'
									className='data__input _name'
								/>
								<input
									type='text'
									name='state'
									placeholder='город'
									className='data__input _state'
								/>
								<input
									type='text'
									name='street'
									placeholder='улица'
									className='data__input _street'
								/>
								<input
									type='text'
									name='home'
									placeholder='дом - кв.'
									className='data__input _home'
								/>
								<input
									type='tel'
									name='tel'
									placeholder='телефон'
									className='data__input _tel'
								/>
							</ul>
						</div>
						<div className='cart__footer__down'>
							<BackButton />
							<button>Оплатить сейчас</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
