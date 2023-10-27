import { SORT_ORDER_ASC, SORT_ORDER_DESC } from "./../data/constants";

export interface IUser {
  id: string;
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
  address: string;
}

export type UserKey = keyof IUser;

export type SortOrder = typeof SORT_ORDER_ASC | typeof SORT_ORDER_DESC;
