import { Box } from "@mui/material";
import { LoginForm } from "../components/login";

export const LoginPage = () => (
  <Box
    height="100vh"
    display="flex"
    alignItems="center"
    justifyContent="center"
    sx={{
      background: "linear-gradient(to right, #512dd6, #9073E9, #ad92fd)",
    }}
  >
    <LoginForm />
  </Box>
);
