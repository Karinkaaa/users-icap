import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { UseControllerProps, useController } from "react-hook-form";
import { IUser } from "../../types";

interface Props {
  readOnly?: boolean;
}

export const InputController: React.FC<
  UseControllerProps<IUser> & Props & TextFieldProps
> = ({
  control,
  name,
  label,
  rules,
  defaultValue,
  shouldUnregister,
  ...props
}) => {
  const {
    field: { ref, ...field },
    fieldState: { error },
  } = useController({ rules, name, control });

  return (
    <TextField
      fullWidth
      variant="outlined"
      sx={{ m: 1 }}
      {...field}
      {...props}
      inputRef={ref}
      label={label}
      error={!!error}
      helperText={error?.message || props.helperText}
    />
  );
};
