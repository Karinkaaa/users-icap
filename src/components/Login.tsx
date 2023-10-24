import { Box, Button, TextField, Typography } from "@mui/material";

export const Login = () => {
  return (
    <Box
      component="form"
      autoComplete="off"
      noValidate
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        background: "linear-gradient(to right, #512dd6, #9073E9, #ad92fd)",
      }}
    >
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
        />
        <TextField
          fullWidth
          margin="dense"
          type="password"
          variant="outlined"
          label="Password"
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
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};
