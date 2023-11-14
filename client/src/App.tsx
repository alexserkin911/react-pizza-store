import React from 'react';

import Header from './components/Header';
import Home from './pages/Home';
import './styles/App.scss';

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<Home />
		</div>
	);
}

export default App;
