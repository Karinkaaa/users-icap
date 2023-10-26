import { DatePickerProps } from "@mui/lab";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import React from "react";
import { UseControllerProps, useController } from "react-hook-form";
import { DATE_FORMAT, MIN_DATE } from "../../data/constants";
import { IUser } from "../../types";

export const DateController: React.FC<
  UseControllerProps<IUser> & DatePickerProps<Date>
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
    field: { ref, value, onChange },
    fieldState: { error },
  } = useController({ rules, name, control });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        {...props}
        inputRef={ref}
        label={label}
        minDate={dayjs(MIN_DATE)}
        maxDate={dayjs().endOf("day")}
        format={DATE_FORMAT}
        value={dayjs(value, DATE_FORMAT)}
        onChange={(e) => onChange(e?.format(DATE_FORMAT))}
        slotProps={{
          textField: {
            error: !!error,
            helperText: error?.message,
          },
        }}
        sx={{ width: "100%", my: 1 }}
      />
    </LocalizationProvider>
  );
};
