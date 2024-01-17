import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as DecrementSvg } from '../assets/svg/btn-decrement.svg';
import { ReactComponent as IncrementSvg } from '../assets/svg/btn-increment.svg';
import { ReactComponent as RemoveSvg } from '../assets/svg/btn-remove.svg';
import { ReactComponent as Cartsvg } from '../assets/svg/cart.svg';
import { ReactComponent as ShoppingCartSvg } from '../assets/svg/shopping-cart.svg';
import '../styles/Cart.scss';

export default function Cart() {
	const [cartItem, setCartItem] = useState();
	return (
		<div className='cart'>
			<div className='cart_container _container'>
				<div className='cart__body'>
					<div className='cart__header'>
						<h1>
							<ShoppingCartSvg /> Корзина
						</h1>
						<button>
							<Cartsvg className='icon' />
							<span>Очистить корзину</span>
						</button>
					</div>
					<div className='cart__content'>
						<div className='cart__content__body'>
							<div className='cart__content__left'>
								<img src='' alt='pizza' />
								<div>
									<h1>Сырный цыпленок</h1>
									<p>тонкое тесто, 26 см.</p>
								</div>
							</div>
							<div className='cart__content__right'>
								<div>
									<IncrementSvg />
									<span>3</span>
									<DecrementSvg />
								</div>
								<span>770 ₽ </span>
								<RemoveSvg />
							</div>
						</div>
					</div>
					<div className='cart__footer'>
						<div className='cart__footer__total'>
							<div className='total'>
								<p>Всего пицц:</p>
								<span>3 шт.</span>
							</div>
							<div className='amount'>
								<p>Сумма заказа:</p>
								<span>900 ₽</span>
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
							<Link to={'/'}>
								&lt;
								<span>Вернуться назад</span>
							</Link>
							<button>Оплатить сейчас</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
