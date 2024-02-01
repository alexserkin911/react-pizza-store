import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SvgShoppingCart from '../svg/SvgShoppingCart';
import Search from './Search/Search';

export default function Header() {
	const { totalPrice, items } = useSelector((state) => state.cart);

	const totalCount = items.reduce((sum, obj) => sum + obj.count, 0);

	return (
		<header className='header'>
			<div className='header__container _container'>
				<div className='header__body'>
					<div className='header__left'>
						<Link to='/' className='header__logo'>
							<img src='logo.png' alt='Logo' />
							<div>
								<h1>REACT PIZZA</h1>
								<p>самая вкусная пицца во вселенной</p>
							</div>
						</Link>
						<Search />
					</div>
					<Link to='/cart' className='header__button'>
						<p>{totalPrice} P</p>
						<span>
							<SvgShoppingCart /> {totalCount}
						</span>
					</Link>
				</div>
			</div>
		</header>
	);
}
