import { Stack, Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={5} color="error" showZero max={999}>
        <MailIcon />
      </Badge>

      <Badge variant="dot" color="error" showZero max={999}>
        <MailIcon />
      </Badge>
    </Stack>
  );
};
