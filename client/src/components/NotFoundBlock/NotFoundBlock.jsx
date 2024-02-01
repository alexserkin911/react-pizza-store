import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundBlock.module.scss';

export default function NotFoundBlock() {
	return (
		<div className='not_container _container'>
			<div className={styles.NotFoundBlock}>
				<div>
					<h1>Корзина пустая 😕</h1>
					<p>
						Вероятней всего, вы не заказывали ещё пиццу. <br />
						Для того, чтобы заказать пиццу, перейди на главную страницу.
					</p>

					<img src='/icon/image-shopping-cart.jpg' alt='Cart' />
					<Link to={'/'}>
						<span>Вернуться назад</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
