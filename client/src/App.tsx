import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import { Suspense, lazy } from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './styles/App.scss';

const Cart = lazy(() => import('./pages/Cart'));
const FullPizza = lazy(() => import('./pages/FullPizza'));

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route
					path='/cart'
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<Cart />
						</Suspense>
					}
				/>
				<Route
					path='/pizza/:id'
					element={
						<Suspense>
							<FullPizza />
						</Suspense>
					}
				/>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
