import { Box, FormControlLabel, Checkbox } from '@mui/material';

export const MuiCheckbox = () => {
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I Accept terms and conditions"
          control={<Checkbox />}
        />
      </Box>
    </Box>
  );
};
