import { Container, Paper, Table, TableContainer } from "@mui/material";
import { IUser } from "../../types";
import { UsersTableBody } from "./UsersTableBody";
import { UsersTableHead } from "./UsersTableHead";
import { UsersTablePagination } from "./UsersTablePagination";

interface Props {
  rows: IUser[];
  count: number;
}

export const UsersTable: React.FC<Props> = ({ rows, count }) => {
  return (
    <Container maxWidth="lg">
      <Paper sx={{ width: "100%", mt: 10, mb: 5 }}>
        <TableContainer>
          <Table>
            <UsersTableHead />
            <UsersTableBody rows={rows} />
          </Table>
        </TableContainer>
        <UsersTablePagination count={count} />
      </Paper>
    </Container>
  );
};
