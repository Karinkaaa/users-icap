import { TableCell } from "@mui/material";
import { IUser } from "../../types";

interface Props {
  value: keyof IUser;
}

export const UsersTableCell: React.FC<Props> = ({ value }) => {
  return <TableCell align="right">{value}</TableCell>;
};
