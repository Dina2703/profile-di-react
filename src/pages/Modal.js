import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography } from "@material-ui/core";

export default function ReUseModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Typography variant="subtitle2" align="center">
            {"Thank you for the contacting me!"}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant="body2" align="center" color="textPrimary">
              I will get in touch with you very soon
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="secondary"
            variant="outlined"
            align="center"
          >
            <Typography variant="subtitle2" align="center">
              OK, CLOSE
            </Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
