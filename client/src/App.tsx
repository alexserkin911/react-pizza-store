import React, { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './styles/App.scss';

function App() {
	const [searchValue, setSearchValue] = useState('');

	return (
		<div className='wrapper'>
			<Header searchValue={searchValue} setSearchValue={setSearchValue} />
			<Routes>
				<Route path='/' element={<Home searchValue={searchValue} />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/emptycart' element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
