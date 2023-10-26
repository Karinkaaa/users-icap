import { LoadingButton } from "@mui/lab";
import { CircularProgress } from "@mui/material";
import React from "react";

interface Props {
  label: string;
  isLoading: boolean;
}

export const SubmitLoadingButton: React.FC<Props> = ({ label, isLoading }) => (
  <LoadingButton
    fullWidth
    type="submit"
    size="large"
    variant="contained"
    loading={isLoading}
    loadingIndicator={<CircularProgress size={20} sx={{ color: "white" }} />}
    disabled={isLoading}
    sx={{
      mt: 2,
      height: 56,
      fontWeight: 700,
      color: "white",
      background: "linear-gradient(to right, #512dd6, #7c55ee, #ad92fd)",
    }}
  >
    {label}
  </LoadingButton>
);
