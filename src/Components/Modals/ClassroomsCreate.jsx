import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import "../../pages/Teachers.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#454962",
  //   border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ClassroomsCreate() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="Teacher-Modal">
      <Button
        onClick={handleOpen}
        style={{
          margin: "20px",
          padding: "10px",
        }}
        variant="contained">
        Create Classrooms
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <TextField
            id="filled-basic"
            label="Building"
            className="teacher-input"
            variant="filled"
            InputProps={{
              sx: {
                color: "white",
              },
            }}
            InputLabelProps={{
              sx: {
                color: "white",
                "&.Mui-focused": {
                  color: "white",
                },
              },
            }}
          />
          <TextField
            id="filled-basic"
            label="Floor"
            className="teacher-input"
            variant="filled"
            InputProps={{
              sx: {
                color: "white",
              },
            }}
            InputLabelProps={{
              sx: {
                color: "white",
                "&.Mui-focused": {
                  color: "white",
                },
              },
            }}
          />
          <TextField
            id="filled-basic"
            label="Room Number"
            className="teacher-input"
            variant="filled"
            InputProps={{
              sx: {
                color: "white",
              },
            }}
            InputLabelProps={{
              sx: {
                color: "white",
                "&.Mui-focused": {
                  color: "white",
                },
              },
            }}
          />

          <Button
            variant="contained"
            style={{
              marginTop: "10px",
            }}>
            Create
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
