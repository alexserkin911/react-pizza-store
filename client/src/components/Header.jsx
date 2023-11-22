import React from 'react';
import { Link } from 'react-router-dom';
import SvgShoppingCart from '../svg/SvgShoppingCart';
import Svgsearch from '../svg/Svgsearch';

export default function Header() {
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
						<div className='header__search'>
							<Svgsearch />
							<input type='text' placeholder='Поиск...' />
						</div>
					</div>
					<Link to='/cart' className='header__button'>
						<p>520 P</p>
						<span>
							<SvgShoppingCart /> 3
						</span>
					</Link>
				</div>
			</div>
		</header>
	);
}
