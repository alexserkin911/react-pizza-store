import React from 'react';
import styles from './NotFoundBlock.module.scss';

export default function NotFoundBlock() {
	return (
		<div className={styles.NotFoundBlock}>
			<h1>Корзина пустая 😕</h1>
			<p>Вероятней всего, вы не заказывали ещё пиццу.</p>
			<div>Для того, чтобы заказать пиццу, перейди на главную страницу.</div>
			<img src='/icon/image-shopping-cart.jpg' alt='Cart' />
			<button>Вернуться назад</button>
		</div>
	);
}
