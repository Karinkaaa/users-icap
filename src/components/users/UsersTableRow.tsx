import { TableRow } from "@mui/material";
import { IUser } from "../../types";
import { ActionsCell } from "./ActionsCell";
import { UsersTableCell } from "./UsersTableCell";

interface Props {
  row: IUser;
}

export const UsersTableRow: React.FC<Props> = ({ row }) => (
  <TableRow key={row.id} hover>
    <ActionsCell user={row} />
    {Object.values(row).map((value, index) => (
      <UsersTableCell key={index} value={value} />
    ))}
  </TableRow>
);
