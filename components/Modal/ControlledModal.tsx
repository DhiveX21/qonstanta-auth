import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

type Props = {
  children: any;
  buttonTitle: any;
  buttonClass?: string;
  showModal?: boolean;
  defaultButton?: boolean;
  onClose?: (cond: boolean) => void;
  width: string;
  height: string;
};

export default function ControlledModal(props: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    width: props.width ?? "auto",
    height: props.height ?? "auto",
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "4px solid #2D89EE",
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      {props.defaultButton !== false && (
        <Button onClick={handleOpen} className={props.buttonClass}>
          {props.buttonTitle}
        </Button>
      )}
      <Modal
        open={props.showModal !== undefined ? props.showModal : open}
        onClose={props.onClose ?? handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{props.children}</Box>
      </Modal>
    </div>
  );
}
