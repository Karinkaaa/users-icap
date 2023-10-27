import { TableCell } from "@mui/material";
import { UserKey } from "../../types";

interface Props {
  value: UserKey;
}

export const UsersTableCell: React.FC<Props> = ({ value }) => {
  return <TableCell align="right">{value}</TableCell>;
};
