import './App.css';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { lightTheme } from './Theme/Theme';
import { Navbar } from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';


function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="container p-0 bg-gray-100 dark:bg-gray-500">
          <Home />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
