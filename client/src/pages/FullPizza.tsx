import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton/BackButton';
import { PizzaItem } from '../redux/pizza/types';
import '../styles/App.scss';

export default function FullPizza(): JSX.Element {
	const { id } = useParams();
	const navigate = useNavigate();

	const [pizza, setPizza] = useState<PizzaItem>();

	useEffect(() => {
		async function fetchFullPizza() {
			try {
				const { data } = await axios.get('http://localhost:3001/pizza/' + id);

				setPizza(data);
			} catch (error) {
				console.error('fetchData', error);
				navigate('/');
			}
		}
		fetchFullPizza();
	}, [id, navigate]);

	if (!pizza) {
		return <div>Loading...</div>;
	}

	return (
		<div className='full__pizza1'>
			<div className='full__pizza__container _container'>
				<div className='full__pizza__body1'>
					<img src={pizza.imageUrl} alt='pizza' />
					<h2>{pizza.title}</h2>
					<p>{pizza.description}</p>
					<div>от {pizza.price} ₽</div>
					<BackButton />
				</div>
			</div>
		</div>
	);
}
