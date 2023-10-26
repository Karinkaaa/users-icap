import { TableCell } from "@mui/material";

interface Props {
  label: string;
}

export const UsersTableHeadCell: React.FC<Props> = ({ label }) => (
  <TableCell
    padding={"normal"}
    align={"right"}
    sx={{ fontWeight: 700, textWrap: "nowrap" }}
  >
    {label}
  </TableCell>
);
