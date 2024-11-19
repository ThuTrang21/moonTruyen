import './App.css';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { lightTheme } from './Theme/lightTheme';
import CustomerRoute from './Routers/CustomerRoute';



function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <CustomerRoute/>
    </ThemeProvider>
  );
}

export default App;
