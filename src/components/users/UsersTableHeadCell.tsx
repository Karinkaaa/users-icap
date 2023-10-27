import { TableCell, TableSortLabel } from "@mui/material";
import { SORT_ORDER_ASC } from "../../data/constants";
import { SortOrder, UserKey } from "../../types";

interface Props {
  field: string;
  label: string;
  sortable: boolean;
  order: SortOrder;
  orderBy: UserKey | undefined;
  onSort: (event: React.MouseEvent, property: UserKey) => void;
}

export const UsersTableHeadCell: React.FC<Props> = ({
  field,
  label,
  sortable,
  order,
  orderBy,
  onSort,
}) => (
  <TableCell
    padding="normal"
    align="right"
    sortDirection={orderBy === field ? order : false}
    sx={{ fontWeight: 700, textWrap: "nowrap" }}
  >
    {sortable ? (
      <TableSortLabel
        active={orderBy === field}
        direction={orderBy === field ? order : SORT_ORDER_ASC}
        onClick={(event) => onSort(event, field as UserKey)}
      >
        {label}
      </TableSortLabel>
    ) : (
      label
    )}
  </TableCell>
);
