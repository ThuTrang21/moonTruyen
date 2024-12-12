const { createTheme } = require("@mui/material");

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary:{
      main:"#67e8f9",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#4ae2f6",
    },
    black: {
      main: "#242B2E",
    },
    background: {
      main: "#67e8f9",
      default: "#ffffff",
      paper: "#ffffff",
    },
    textColor: {
      main: "#000000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#67e8f9",
          color: "#ffffff", 
          textTransform: "capitalize", 
          fontFamily:"inherit",
          "&:hover": {
            backgroundColor: "#19b9ce", 
          },
        },
      },
    },
  },
  
});
