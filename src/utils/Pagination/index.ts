type PaginationParams = { total: number; activePage: number };

const centerRule = ({ total, activePage }: PaginationParams) =>
  activePage - 1 <= 0
    ? 1
    : activePage === total
    ? activePage - 2
    : activePage - 1;

const addEllipsis = (pages: Array<number>): Array<number | string> => {
  const firstPage = pages[0];
  const secondPage = pages[1];

  let newPages: Array<number | string> = [...pages];

  if (secondPage > firstPage + 2) {
    newPages = [firstPage, '...', ...pages.slice(1)];
  }

  const penultimatePage = pages[pages.length - 2];
  const lastPage = pages[pages.length - 1];

  if (penultimatePage < lastPage - 2) {
    newPages = [...newPages.slice(0, -1), '...', lastPage];
  }

  return newPages;
};

const pagination = ({ total, activePage }: PaginationParams) => {
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const visiblePages = 3;
  let pages: Array<number> = [
    1,
    ...Array.from(
      { length: visiblePages },
      (_, i) => i + centerRule({ total, activePage }),
    ),
    total,
  ];

  pages = pages.filter((page, index, array) => array.indexOf(page) === index);

  const firstPage = pages[0];
  const secondPage = pages[1];

  if (secondPage === firstPage + 2) {
    pages = [firstPage, firstPage + 1, ...pages.slice(1)];
  }

  const penultimatePage = pages[pages.length - 2];
  const lastPage = pages[pages.length - 1];

  if (penultimatePage === lastPage - 2) {
    pages = [...pages.slice(0, -1), lastPage - 1, lastPage];
  }

  return addEllipsis(pages);
};

export default pagination;
