import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NotFoundBlock from './components/NotFoundBlock/NotFoundBlock';
import Cart from './pages/Cart';
import Home from './pages/Home';
import './styles/App.scss';

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</div>
	);
}

export default App;
