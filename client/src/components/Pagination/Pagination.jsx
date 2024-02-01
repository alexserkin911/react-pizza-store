import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import style from './pagination.module.scss';

import { setCurrentPage } from '../../redux/slices/filterSlice.js';

export default function Pagination() {
	const { currentPage } = useSelector((state) => state.filter);
	const { totalPages } = useSelector((state) => state.pizza);
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
