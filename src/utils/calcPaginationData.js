export const calcPaginationData = ({ total, page, perPage }) => {
  const totalPage = Math.ceil(total / perPage);
  const hasNextPage = page < totalPage;
  const hasPrevPage = page > 1;

  return {
    page,
    perPage,
    totalPage,
    totalItems: total,
    hasNextPage,
    hasPrevPage,
  };
};
