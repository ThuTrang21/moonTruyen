import './App.css';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { lightTheme } from './Theme/Theme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline></CssBaseline>
    </ThemeProvider>
  );
}

export default App;
