import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'gatsby'

import { PaginationWrapper } from './styles'

const Pagination = ({
  isFirstPage,
  isLastPage,
  currentPage,
  totalPages,
  previousPage,
  nextPage,
}) => {
  return (
    <PaginationWrapper>
      {!isFirstPage && <Link to={previousPage}>Página Antierior</Link>}

      <p>
        {currentPage} de {totalPages}
      </p>

      {!isLastPage && <Link to={nextPage}>Proxima Página</Link>}
    </PaginationWrapper>
  )
}

Pagination.propTypes = {
  isFirstPage: propTypes.bool.isRequired,
  isLastPage: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  totalPages: propTypes.number.isRequired,
  previousPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination
