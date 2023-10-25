import { Logout, PeopleOutline } from "@mui/icons-material";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useAppDispatch } from "../../store/hooks";
import { loginActions } from "../../store/slice";

export const UsersAppBar = () => {
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(loginActions.logout());
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(to right, #512dd6, #8e6cf5, #512dd6)",
        boxShadow: "0 0 20px #512dd6",
      }}
    >
      <Toolbar>
        <PeopleOutline />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
          Users
        </Typography>
        <Button
          size="large"
          color="inherit"
          onClick={onLogout}
          endIcon={<Logout />}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};
