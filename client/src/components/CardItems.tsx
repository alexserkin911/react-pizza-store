import { useSelector } from 'react-redux';
import { pizzaSelector } from '../redux/pizza/selectors';
import { PizzaItem } from '../redux/pizza/types';
import Item from './Item';
import PizzaSkeleton from './PizzaSkeleton';

export default function CardItems(): JSX.Element {
	const { status, items } = useSelector(pizzaSelector);

	const isLoading = status === 'loading';
	return (
		<div className='main__content__items'>
			{(isLoading ? [...new Array(4)] : items).map((el: PizzaItem, i: number) =>
				isLoading ? <PizzaSkeleton key={i} /> : <Item key={el.id} {...el} />,
			)}
		</div>
	);
}
