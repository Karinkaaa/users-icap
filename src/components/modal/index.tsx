import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import { IUser } from "../../types";
import { SuccessAlert } from "../alerts";
import { EditUserForm } from "../form";

interface Props {
  user: IUser;
  open: boolean;
  onClose: () => void;
}

export const EditUserFormModal: React.FC<Props> = ({ user, open, onClose }) => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box
          p={4}
          width={400}
          position="absolute"
          top="50%"
          left="50%"
          bgcolor="background.paper"
          boxShadow="0 0 10px #ded3ff"
          sx={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography variant="h5" textAlign="center" mb={2}>
            User: {user.id}
          </Typography>
          <EditUserForm
            user={user}
            onSuccess={() => {
              onClose();
              setShowAlert(true);
            }}
          />
        </Box>
      </Modal>
      {showAlert && <SuccessAlert message="Successfully updated" />}
    </>
  );
};
