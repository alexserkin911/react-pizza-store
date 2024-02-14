import React from 'react';
import BackButton from '../BackButton/BackButton';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock: React.FC = () => {
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
					<BackButton />
				</div>
			</div>
		</div>
	);
};
export default NotFoundBlock;
