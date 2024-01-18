import React from 'react';
import ReactPaginate from 'react-paginate';
import style from './pagination.module.scss';

export default function Pagination() {
	return (
		<ReactPaginate
			className={style.root}
			breakLabel='...'
			nextLabel='>'
			onPageChange={(e) => e}
			pageRangeDisplayed={5}
			pageCount={3}
			previousLabel='<'
			renderOnZeroPageCount={null}
		/>
	);
}
