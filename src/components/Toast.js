import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

export default function Toast({open , setOpen , message}) {
//   const [open, setOpen] = React.useState(false);
    const vertical = "top";
    const horizontal = "center";
    
    function SlideTransition(props) {
        return <Slide {...props} direction="down" />;
      }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        TransitionComponent={SlideTransition}
        autoHideDuration={2000}
        onClose={handleClose}
        message={message}
        action={action}
      />
    </div>
  );
}