import { SORT_ORDER_DESC } from "../data/constants";
import { IUser, SortOrder, UserKey } from "../types";

export const descComparator = (a: IUser, b: IUser, orderBy: UserKey) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

export const getComparator = (
  order: SortOrder,
  orderBy: UserKey
): ((a: IUser, b: IUser) => number) => {
  return order === SORT_ORDER_DESC
    ? (a, b) => descComparator(a, b, orderBy)
    : (a, b) => -descComparator(a, b, orderBy);
};

export const stableSort = (
  array: readonly IUser[],
  comparator: (a: IUser, b: IUser) => number
) => {
  const stabilized = array.map((el, index) => [el, index] as [IUser, number]);

  stabilized.sort((a, b) => {
    const order = comparator(a[0], b[0]);

    if (order !== 0) {
      return order;
    }

    return a[1] - b[1];
  });

  return stabilized.map((el) => el[0]);
};
