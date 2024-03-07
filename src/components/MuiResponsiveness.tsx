import { Box } from '@mui/material';
import { styled } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
  height: '200px',
  width: '250px',
  //backgroundColor: theme.status.danger,
  //backgroundColor: theme.palette.neutral?.main,
  backgroundColor: theme.palette.neutral?.darker,
}));

export const MuiResponsiveness = () => {
  return (
    <>
      <Box
        //sx={{ height: '300px', width: '300px', bgcolor: 'primary.main' }}
        sx={{
          height: '300px',
          width: {
            sx: 100, // 0 vpw
            sm: 200, // 600 <
            md: 300, // 900 <
            lg: 400, //1200 <
            xl: 500, // 1536 <
          },
          bgcolor: 'secondary.main',
        }}
      ></Box>
      <StyledBox />
    </>
  );
};
