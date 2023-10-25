import { TableBody } from "@mui/material";
import { IUser } from "../../types";
import { UsersTableRow } from "./UsersTableRow";

interface Props {
  rows: IUser[];
}

export const UsersTableBody: React.FC<Props> = ({ rows }) => {
  return (
    <TableBody>
      {rows.map((row) => (
        <UsersTableRow key={row.id} row={row} />
      ))}
    </TableBody>
  );
};
