import { Typography, Box } from '@mui/material';
// old import { DatePicker } from '@mui/lab';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

//import { useState } from 'react';

export const MuiPicker = () => {
  //const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  return (
    <Box style={{ padding: '20px' }}>
      <Typography variant="h5">MUI DatePicker</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Select Date" />
      </LocalizationProvider>
    </Box>
  );
};
