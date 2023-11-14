import React from 'react';
import CardItems from '../components/CardItems';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import '../styles/Home.scss';

export default function Home() {
	return (
		<div className='main'>
			<div className='maim__container _container'>
				<div className='main__menu'>
					<Categories />
					<Sort />
				</div>
				<div className='main__content'>
					<div className='main__content__body'>
						<h1>Все пиццы</h1>
						<CardItems />
					</div>
				</div>
			</div>
		</div>
	);
}
