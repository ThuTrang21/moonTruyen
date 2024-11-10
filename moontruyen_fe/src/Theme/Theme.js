const { createTheme } = require("@mui/material");

export const lightTheme=createTheme({
    palette:{
        mode:"light",
        primary:{
            main:"#e91e63"
        },
        secondary:{
            main:"#5A20CB"
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
            main: "#4a4a4a"     
        }
    }
})