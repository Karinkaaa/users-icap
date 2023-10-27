import { Container, Paper, Table, TableContainer } from "@mui/material";
import { useState } from "react";
import { SORT_ORDER_ASC, SORT_ORDER_DESC } from "../../data/constants";
import { getComparator, stableSort } from "../../helpers";
import { IUser, SortOrder, UserKey } from "../../types";
import { UsersTableBody } from "./UsersTableBody";
import { UsersTableHead } from "./UsersTableHead";
import { UsersTablePagination } from "./UsersTablePagination";

interface Props {
  rows: IUser[];
  count: number;
}

export const UsersTable: React.FC<Props> = ({ rows, count }) => {
  const [order, setOrder] = useState<SortOrder>(SORT_ORDER_ASC);
  const [orderBy, setOrderBy] = useState<UserKey | undefined>();
  
  const sortedRows = orderBy
    ? stableSort(rows, getComparator(order, orderBy))
    : rows;

  const handleSort = (event: React.MouseEvent, property: UserKey) => {
    const isAsc = orderBy === property && order === SORT_ORDER_ASC;
    setOrder(isAsc ? SORT_ORDER_DESC : SORT_ORDER_ASC);
    setOrderBy(property);
  };

  return (
    <Container maxWidth="lg">
      <Paper sx={{ width: "100%", mt: 10, mb: 5 }}>
        <TableContainer>
          <Table>
            <UsersTableHead
              order={order}
              orderBy={orderBy}
              onSort={handleSort}
            />
            <UsersTableBody rows={sortedRows} />
          </Table>
        </TableContainer>
        <UsersTablePagination count={count} />
      </Paper>
    </Container>
  );
};
