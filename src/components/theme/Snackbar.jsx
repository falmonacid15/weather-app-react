import { useState } from "react";

import { Alert, Button, Snackbar } from "@mui/material";

export default function SnackbarAlert(props) {
  const [open, setOpen] = useState(props);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  };
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={2500}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ mt: 7 }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Ciudad encontrada exitosamente!
        </Alert>
      </Snackbar>
    </>
  );
}
