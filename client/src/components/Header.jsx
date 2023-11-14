import React from 'react';
import SvgShoppingCart from '../svg/SvgShoppingCart';
import Svgsearch from '../svg/Svgsearch';

export default function Header() {
	return (
		<header className='header'>
			<div className='header__container _container'>
				<div className='header__body'>
					<div className='header__left'>
						<div className='header__logo'>
							<img src='logo.png' alt='Logo' />
							<div>
								<h1>REACT PIZZA</h1>
								<p>самая вкусная пицца во вселенной</p>
							</div>
						</div>
						<div className='header__search'>
							<Svgsearch />
							<input type='text' placeholder='Поиск...' />
						</div>
					</div>
					<button>
						520 P
						<span>
							<SvgShoppingCart /> 3
						</span>
					</button>
				</div>
			</div>
		</header>
	);
}
