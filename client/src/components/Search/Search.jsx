import React, { useCallback, useRef, useState } from 'react';

import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as SvgRemove } from '../../assets/svg/btn-remove.svg';
import { ReactComponent as SvgSearch } from '../../assets/svg/search.svg';
import { setSearchValue } from '../../redux/slices/searchSlice.js';
import style from './search.module.scss';

export default function Search() {
	const searchValue = useSelector((state) => state.search.searchValue);
	const dispatch = useDispatch();
	const inputRef = useRef();

	const [inputValue, setInputValue] = useState('');

	const updateSearchValue = useCallback(
		debounce((str) => {
			dispatch(setSearchValue(str));
		}, 500),
		[],
	);

	const onchangeInput = (event) => {
		setInputValue(event.target.value);
		updateSearchValue(event.target.value);
	};

	return (
		<div className={style.search}>
			<SvgSearch />
			<input
				ref={inputRef}
				value={inputValue}
				onChange={onchangeInput}
				type='text'
				placeholder='Поиск...'
			/>
			{searchValue && (
				<SvgRemove
					className={style.remove}
					onClick={() => {
						dispatch(setSearchValue(''));
						setInputValue('');
						inputRef.current.focus();
					}}
				/>
			)}
		</div>
	);
}
