import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { filterSelector } from '../../redux/filter/selectors';
import { setCurrentPage } from '../../redux/filter/slice';
import { pizzaSelector } from '../../redux/pizza/selectors';
import style from './pagination.module.scss';

export default function Pagination() {
	const { currentPage } = useSelector(filterSelector);
	const { totalPages } = useSelector(pizzaSelector);
	const dispatch = useDispatch();

	return (
		<ReactPaginate
			className={style.root}
			breakLabel='...'
			nextLabel='>'
			onPageChange={(e) => dispatch(setCurrentPage(e.selected + 1))}
			pageRangeDisplayed={4}
			pageCount={totalPages}
			forcePage={currentPage - 1}
			previousLabel='<'
			renderOnZeroPageCount={null}
		/>
	);
}
