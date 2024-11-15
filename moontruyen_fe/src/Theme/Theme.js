const { createTheme } = require("@mui/material");

export const lightTheme=createTheme({
    palette:{
        mode:"light",
      
        secondary:{
            main:"#4ae2f6"
        },
        black:{
            main:"#242B2E"
        },
        background: {
            main: "#f5f5f5",       
            default: "#f5f5f5",    
            paper: "#ffffff"        
        },
        textColor: {
            main: "#ffffff"    
        }
    }
})