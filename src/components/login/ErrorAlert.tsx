import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";

export const ErrorAlert = () => {
  const [open, setOpen] = useState(true);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" variant="filled">
        Invalid username or password
      </Alert>
    </Snackbar>
  );
};
