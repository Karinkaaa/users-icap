import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { useLoginMutation } from "../../store/login.api";
import { loginActions } from "../../store/login.slice";

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [login, result] = useLoginMutation();

  useEffect(() => {
    if (result.isSuccess) {
      dispatch(loginActions.login());
      navigate("/table");
    }
  }, [dispatch, navigate, result.isSuccess]);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      bgcolor="white"
      borderRadius={2}
      boxShadow="0 0 75px #512dd6"
      maxWidth={450}
      width="100%"
      px={5}
      py={7}
    >
      <Typography variant="h3" mb={3}>
        Login
      </Typography>
      <TextField
        fullWidth
        margin="dense"
        variant="outlined"
        label="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        fullWidth
        margin="dense"
        type="password"
        variant="outlined"
        label="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        fullWidth
        size="large"
        variant="contained"
        sx={{
          mt: 2,
          height: 56,
          fontWeight: 700,
          background: "linear-gradient(to right, #512dd6, #7c55ee, #ad92fd)",
        }}
        onClick={() => login({ username, password })}
      >
        Login
      </Button>
    </Box>
  );
};
