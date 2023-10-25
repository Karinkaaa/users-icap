import { IUser } from ".";

export interface IUsersResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IUser[];
}
