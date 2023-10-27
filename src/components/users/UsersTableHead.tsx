import { TableHead, TableRow } from "@mui/material";
import { headCells } from "../../data/headCells";
import { SortOrder, UserKey } from "../../types";
import { UsersTableHeadCell } from "./UsersTableHeadCell";

interface Props {
  order: SortOrder;
  orderBy: UserKey | undefined;
  onSort: (event: React.MouseEvent, property: UserKey) => void;
}

export const UsersTableHead: React.FC<Props> = ({ order, orderBy, onSort }) => (
  <TableHead sx={{ bgcolor: "#ede7ff" }}>
    <TableRow>
      {headCells.map(({ field, label, sortable }) => (
        <UsersTableHeadCell
          key={field}
          field={field}
          label={label}
          sortable={sortable}
          order={order}
          orderBy={orderBy}
          onSort={onSort}
        />
      ))}
    </TableRow>
  </TableHead>
);
