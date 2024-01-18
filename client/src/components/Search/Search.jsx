import React from 'react';

import { ReactComponent as SvgRemove } from '../../assets/svg/btn-remove.svg';
import { ReactComponent as SvgSearch } from '../../assets/svg/search.svg';
import style from './search.module.scss';

export default function Search({ searchValue, setSearchValue }) {
	return (
		<div className={style.search}>
			<SvgSearch />
			<input
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
				type='text'
				placeholder='Поиск...'
			/>
			{searchValue && (
				<SvgRemove
					className={style.remove}
					onClick={() => setSearchValue('')}
				/>
			)}
		</div>
	);
}
