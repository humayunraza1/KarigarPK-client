import React, { forwardRef, useState } from "react";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Notification(props) {
  const [show, setShow] = useState(true);
  return (
    <Snackbar
      open={show}
      autoHideDuration={2000}
      onClose={() => setShow(false)}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Alert
        onClose={() => setShow(false)}
        severity={props.status}
        sx={{ width: "100%" }}
      >
        {props.msg}
      </Alert>
    </Snackbar>
  );
}

export default Notification;
