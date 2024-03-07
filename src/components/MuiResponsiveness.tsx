import { Box } from '@mui/material';

export const MuiResponsiveness = () => {
  return (
    <Box
      //sx={{ height: '300px', width: '300px', bgcolor: 'primary.main' }}
      sx={{
        height: '300px',
        width: {
          xs: 100, // 0 vpw
          sm: 200, // 600 <
          md: 300, // 900 <
          lg: 400, //1200 <
          xl: 500, // 1536 <
        },
        bgcolor: 'primary.main',
      }}
    ></Box>
  );
};
