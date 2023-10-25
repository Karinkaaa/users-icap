import { TableCell, TableHead, TableRow } from "@mui/material";
import { headCells } from "../../data/headCells";

export const UsersTableHead = () => (
  <TableHead sx={{ bgcolor: "#ede7ff" }}>
    <TableRow>
      {headCells.map(({ id, numeric, label }) => (
        <TableCell
          key={id}
          align={numeric ? "right" : "left"}
          padding={"normal"}
          sx={{ fontWeight: 700 }}
        >
          {label}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);
