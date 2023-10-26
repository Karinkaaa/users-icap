export interface IUser {
  id: string;
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
  address?: string;
}

export type IUserForm = Omit<IUser, "id">;
