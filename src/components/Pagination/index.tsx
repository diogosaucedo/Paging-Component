import React from 'react';
import * as Styles from './styles';
import pagination from '../../utils/Pagination';
import PaginationType from './type';

const Pagination = ({ total = 10, activePage = 5 }: PaginationType) => {
  if (total < activePage) {
    return <Styles.Span>total needs to be greater than activePage</Styles.Span>;
  }

  return (
    <Styles.Paging>
      {pagination({ total, activePage }).map((page, index) =>
        page === '...' ? (
          <Styles.Item key={index}>
            <Styles.Span>{page}</Styles.Span>
          </Styles.Item>
        ) : activePage === page ? (
          <Styles.Item key={index} active>
            <Styles.Span active>{page}</Styles.Span>
          </Styles.Item>
        ) : (
          <Styles.Item key={index}>
            <Styles.Link>{page}</Styles.Link>
          </Styles.Item>
        ),
      )}
    </Styles.Paging>
  );
};
export default Pagination;
