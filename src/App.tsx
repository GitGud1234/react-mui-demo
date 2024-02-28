import './App.css';
import { MuiTypography } from './components/MuiTypography';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MuiButton } from './components/MuiButton';
import { MuiTextField } from './components/MuiTextField';
import { MuiSelect } from './components/MuiSelect';
import { MuiRadioButton } from './components/MuiRadioButton';

/*
const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});*/

function App() {
  return (
    //<ThemeProvider theme={theme}>
    <div className="App">
      {/* {<MuiTypography />} */}
      {/* {<MuiButton />} */}
      {/* {<MuiTextField />} */}
      {/* {<MuiSelect />} */}
      {<MuiRadioButton />}
    </div>
    //</ThemeProvider>
  );
}

export default App;
