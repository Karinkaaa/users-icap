import { Edit } from "@mui/icons-material";
import { IconButton, TableCell } from "@mui/material";
import { useState } from "react";
import { IUser } from "../../types";
import { EditUserFormModal } from "../modal";

interface Props {
  user: IUser;
}

export const ActionsCell: React.FC<Props> = ({ user }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <TableCell align="left" sx={{ px: 1 }}>
      <IconButton
        color="warning"
        sx={{
          "&:hover": {
            outline: "1px dashed orange",
          },
        }}
        onClick={handleOpen}
      >
        <Edit />
      </IconButton>
      <EditUserFormModal user={user} open={open} onClose={handleClose} />
    </TableCell>
  );
};
