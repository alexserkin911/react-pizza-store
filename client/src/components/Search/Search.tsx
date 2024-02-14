import React, { useCallback, useRef, useState } from 'react';

import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as SvgRemove } from '../../assets/svg/btn-remove.svg';
import { ReactComponent as SvgSearch } from '../../assets/svg/search.svg';
import { searchSelector } from '../../redux/search/selectors';
import { setSearchValue } from '../../redux/search/slice';
import style from './search.module.scss';

export default function Search() {
	const { searchValue } = useSelector(searchSelector);
	const dispatch = useDispatch();
	const inputRef = useRef<HTMLInputElement>(null);

	const [inputValue, setInputValue]: [
		string,
		React.Dispatch<React.SetStateAction<string>>,
	] = useState<string>('');

	const updateSearchValue = useCallback(
		debounce((str: string) => {
			dispatch(setSearchValue(str));
		}, 500),
		[],
	);

	const onchangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
		updateSearchValue(event.target.value);
	};

	const onClickSvgRemove = () => {
		dispatch(setSearchValue(''));
		setInputValue('');
		if (inputRef.current) {
			inputRef.current.focus();
		}
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
				<SvgRemove className={style.remove} onClick={onClickSvgRemove} />
			)}
		</div>
	);
}
