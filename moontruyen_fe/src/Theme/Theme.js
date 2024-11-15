const { createTheme } = require("@mui/material");

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    secondary: {
      main: "#4ae2f6",
    },
    black: {
      main: "#242B2E",
    },
    background: {
      main: "#67e8f9",
      default: "#67e8f9",
      paper: "#ffffff",
    },
    textColor: {
      main: "#ffffff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#67e8f9",
          color: "#ffffff", 
          "&:hover": {
            backgroundColor: "#19b9ce", 
          },
        },
      },
    },
  },
});
