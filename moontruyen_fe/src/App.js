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
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        <div
          className="container pt-16 flex-1 overflow-auto bg-gray-200 dark:bg-gray-500"
        >
          <Home />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
