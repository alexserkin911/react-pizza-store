import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { cartSelector } from '../redux/cart/selectors';
import SvgShoppingCart from '../svg/SvgShoppingCart';
import Search from './Search/Search';

export default function Header(): JSX.Element {
	const location = useLocation();
	const locationCart = location.pathname;
	const { totalPrice, items } = useSelector(cartSelector);
	const isMount = useRef(false);

	const totalCount = items.reduce(
		(sum: number, obj: any) => sum + obj.count,
		0,
	);

	useEffect(() => {
		if (isMount.current) {
			const json = JSON.stringify(items);
			localStorage.setItem('cart', json);
			console.log(json);
		}
		isMount.current = true;
	}, [items]);

	return (
		<header className='header'>
			<div className='header__container _container'>
				<div className='header__body'>
					<div className='header__left'>
						<Link to='/' className='header__logo'>
							<img src='Pizza-logo-design-template-Vector-PNG.png' alt='Logo' />
							<div>
								<h1>ALEX PIZZA</h1>
								<p>самая вкусная пицца во вселенной</p>
							</div>
						</Link>
						{locationCart !== '/cart' && <Search />}
					</div>
					{locationCart !== '/cart' && (
						<Link to='/cart' className='header__button'>
							<p>{totalPrice} ₽</p>
							<div></div>
							<span>
								<SvgShoppingCart /> {totalCount}
							</span>
						</Link>
					)}
				</div>
			</div>
		</header>
	);
}
