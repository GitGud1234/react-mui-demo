import { Stack, Alert, AlertTitle, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="success">Success</Alert>
      <Alert severity="info">Info</Alert>
      <Alert severity="warning">Warning</Alert>
      <Alert severity="error">Error</Alert>

      <Alert variant="outlined" severity="success">
        Success
      </Alert>
      <Alert variant="outlined" severity="info">
        Info
      </Alert>
      <Alert variant="outlined" severity="warning">
        Warning
      </Alert>
      <Alert variant="outlined" severity="error">
        Error
      </Alert>

      <Alert
        variant="filled"
        severity="success"
        icon={<CheckIcon fontSize="inherit" />}
      >
        Success
      </Alert>
      <Alert
        variant="filled"
        severity="info"
        onClose={() => alert('close alert')}
      >
        Info
      </Alert>
      <Alert
        variant="filled"
        severity="warning"
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        Warning
      </Alert>
      <Alert variant="filled" severity="error">
        <AlertTitle>Error</AlertTitle>
        Error message
      </Alert>
    </Stack>
  );
};
