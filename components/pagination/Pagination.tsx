import React, { type FC } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
import type { PaginationProps } from './Pagination.types';

const Pagination: FC<PaginationProps> = ({
  onPageChange,
  pageCount,
  currentPage
}) => {
  return (
    <div className={styles['pagination']}>
      {pageCount ? (
        <ReactPaginate
          onPageChange={onPageChange}
          pageCount={pageCount}
          previousLabel={'<'}
          nextLabel={'>'}
          containerClassName={styles['pagination__wrapper']}
          pageLinkClassName={styles['pagination__item']}
          previousLinkClassName={styles['pagination__item']}
          nextLinkClassName={styles['pagination__item']}
          activeLinkClassName={styles['pagination__active']}
          disabledClassName={styles['pagination__disabled']}
          forcePage={currentPage}
        />
      ) : ''}
    </div>
  );
}

export default Pagination;
