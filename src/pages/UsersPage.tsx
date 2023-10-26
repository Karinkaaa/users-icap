import { UsersAppBar } from "../components/appbar";
import { UsersTable } from "../components/users";
import { useGetUsersQuery } from "../store/api";
import { useAppSelector } from "../store/hooks";
import { IUsersResponse } from "../types";

const empty: IUsersResponse = {
  results: [],
  count: 0,
  next: null,
  previous: null,
};

export const UsersPage = () => {
  const { page, limit } = useAppSelector((state) => state.users);
  const { data: { results = [], count = 0 } = empty } = useGetUsersQuery({
    page,
    limit,
  });

  return (
    <>
      <UsersAppBar />
      <UsersTable rows={results} count={count} />
    </>
  );
};
