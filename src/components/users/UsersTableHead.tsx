import { TableHead, TableRow } from "@mui/material";
import { headCells } from "../../data/headCells";
import { UsersTableHeadCell } from "./UsersTableHeadCell";

export const UsersTableHead = () => (
  <TableHead sx={{ bgcolor: "#ede7ff" }}>
    <TableRow>
      {headCells.map(({ id, label }) => (
        <UsersTableHeadCell key={id} label={label} />
      ))}
    </TableRow>
  </TableHead>
);
