import React from 'react';
import { Link } from 'react-router-dom';
import style from './backbutton.module.scss';

export default function BackButton() {
	return (
		<Link to={'/'} className={style.root}>
			&lt;
			<span>Вернуться назад</span>
		</Link>
	);
}
