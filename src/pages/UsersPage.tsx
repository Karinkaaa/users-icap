import { Box } from "@mui/material";
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
      <Box
        mx={50}
        py={3}
        borderRadius={10}
        textAlign="center"
        fontStyle="italic"
        sx={{
          background: "linear-gradient(to right, #bba4ff, #dbd2ff)",
        }}
      >
        <p>Please, can you give one more day to finish the task 🙏🏻</p>
        <p>Thanks 🫶🏻</p>
      </Box>
    </>
  );
};
