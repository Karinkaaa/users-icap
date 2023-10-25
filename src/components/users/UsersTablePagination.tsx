import { TablePagination } from "@mui/material";
import { ChangeEvent } from "react";
import { ROWS_PER_PAGE_OPTIONS } from "../../data/constants";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { usersActions } from "../../store/slice";

interface Props {
  count: number;
}

export const UsersTablePagination: React.FC<Props> = ({ count }) => {
  const dispatch = useAppDispatch();
  const { page, limit } = useAppSelector((state) => state.users);

  const handleChangePage = (event: unknown, newPage: number) => {
    dispatch(usersActions.setPage(newPage));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleChangeLimit = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(usersActions.setLimit(parseInt(event.target.value, 10)));
    dispatch(usersActions.setPage(0));
  };

  return (
    <TablePagination
      rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
      component="div"
      count={count}
      rowsPerPage={limit}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeLimit}
    />
  );
};
