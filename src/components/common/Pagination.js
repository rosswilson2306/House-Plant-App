import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = props => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  console.log(currentPage);

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  console.log(pages);

  return (
    <nav aria-label="pagination" className="d-flex justify-content-center">
      <ul className="pagination ml-4">
        {pages.map(page => {
          return (
            <li
              key={page}
              className={
                page === currentPage ? 'page-item active' : 'page-item'
              }
              aria-current="page"
              onClick={() => onPageChange(page)}
            >
              <span className="page-link">{page}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
