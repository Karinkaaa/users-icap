import { TableCell, TableRow } from "@mui/material";
import { IUser } from "../../types";

interface Props {
  row: IUser;
}

export const UsersTableRow: React.FC<Props> = ({ row }) => {
  return (
    <TableRow hover role="checkbox" key={row.id} sx={{ cursor: "pointer" }}>
      <TableCell component="th" scope="row">
        {row.id}
      </TableCell>
      <TableCell align="right">{row.name}</TableCell>
      <TableCell align="right">{row.email}</TableCell>
      <TableCell align="right">{row.birthday_date}</TableCell>
      <TableCell align="right">{row.phone_number}</TableCell>
      <TableCell align="right">{row.address}</TableCell>
    </TableRow>
  );
};
