export const calcPaginationData = ({ totalItems, page, perPage }) => {
  const totalPages = Math.ceil(totalItems / perPage);
  const hasNextPage = page < totalPages;
  const hasPrevPage = page > 1;

  return {
    page,
    perPage,
    totalPages,
    totalItems,
    hasNextPage,
    hasPrevPage,
  };
};
