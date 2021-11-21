import React from 'react';
import { Pagination, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Paginate = ({ page, pages, isAdmin = false, keyword = '' }) => {
  return (
    pages > 1 && (
      <Pagination className='d-flex align-items-center justify-content-center'>
        {/* Create a array from 0 -> pages  */}
        {[...Array(pages).keys()].map((x) => (
          <Link
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
          >
            <Button
              className='button'
              variant='outline-secondary'
              active={x + 1 === page}
            >
              {x + 1}
            </Button>
          </Link>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
