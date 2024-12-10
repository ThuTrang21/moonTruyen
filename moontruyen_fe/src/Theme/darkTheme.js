    const { createTheme } = require("@mui/material");

    export const darkTheme=createTheme({
        palette:{
            mode:"dark",
            primary:{
                main:"#67e8f9",
        contrastText: "#ffffff",
            },
            secondary:{
                main:"#5A20CB"
            },
            black:{
                main:"#242B2E"
            },
            background:{
                main:"#000000",
                default:"#0D0D0D",
                paper:"#0D0D0D"
            },
            textColor:{
                main:"#111111"
            }
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

    })