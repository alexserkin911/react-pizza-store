import React from 'react';
import ReactPaginate from 'react-paginate';
import style from './pagination.module.scss';

export default function Pagination({ currentPage, setCurrentPage, pageCount }) {
	return (
		<ReactPaginate
			className={style.root}
			breakLabel='...'
			nextLabel='>'
			onPageChange={(e) => setCurrentPage(e.selected + 1)}
			pageRangeDisplayed={4}
			pageCount={pageCount}
			previousLabel='<'
			renderOnZeroPageCount={null}
		/>
	);
}
