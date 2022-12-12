import React from 'react';
import { Paging, Item, Span, Link } from './styles';
import pagination from '../../utils/Pagination';

type PaginationParams = { total: number; activePage: number };

const Pagination = ({ total, activePage }: PaginationParams): JSX.Element => {
  return (
    <Paging>
      {pagination({ total, activePage }).map((page, index) =>
        page === '...' ? (
          <Item key={index}>
            <Span>{page}</Span>
          </Item>
        ) : activePage === page ? (
          <Item key={index} active>
            <Span active>{page}</Span>
          </Item>
        ) : (
          <Item key={index}>
            <Link>{page}</Link>
          </Item>
        ),
      )}
    </Paging>
  );
};
export default Pagination;
