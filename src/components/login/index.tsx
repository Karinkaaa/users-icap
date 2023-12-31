import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../store/api";
import { useAppDispatch, useLoginRules } from "../../store/hooks";
import { loginActions } from "../../store/slice";
import { ILogin } from "../../types";
import { ErrorAlert } from "../alerts";
import { SubmitLoadingButton } from "../loadingButton";

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login, { isLoading, isError, isSuccess }] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);
  const { usernameRules, passwordRules } = useLoginRules();

  const {
    handleSubmit,
    reset,
    control,
    formState: { isValid },
    setFocus,
  } = useForm<ILogin>({
    mode: "onChange",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<ILogin> = (value) => {
    if (isValid) {
      login(value);
      reset();
    } else {
      setFocus("username");
    }
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(loginActions.login());
      navigate("/table");
    }
  }, [dispatch, navigate, isSuccess]);

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
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
      <Controller
        name="username"
        control={control}
        rules={usernameRules}
        render={({ field: { ref, ...field }, fieldState: { error } }) => (
          <TextField
            autoFocus
            fullWidth
            {...field}
            inputRef={ref}
            margin="dense"
            variant="outlined"
            label="Username"
            disabled={isLoading}
            error={!!error}
            helperText={error?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={passwordRules}
        render={({ field: { ref, ...field }, fieldState: { error } }) => (
          <TextField
            fullWidth
            {...field}
            inputRef={ref}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((show) => !show)}
                    onMouseDown={(event) => event.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            margin="dense"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            label="Password"
            disabled={isLoading}
            error={!!error}
            helperText={error?.message}
          />
        )}
      />
      {isError && <ErrorAlert message="Invalid username or password" />}
      <SubmitLoadingButton label="Login" isLoading={isLoading} />
    </Box>
  );
};
