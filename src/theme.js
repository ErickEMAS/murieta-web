import { createTheme } from "@material-ui/core";

export default createTheme({
    palette: {
        primary: {
            main: "#2B3036",
        },
        background: {
            default: "#11171D",
        }
    },
    overrides: {

        MuiOutlinedInput: {
            root: {
                borderRadius: "10px",
                backgroundColor: "#2B3036",
                "& fieldset": {
                    border: "none",
                },
                "&:hover fieldset": {
                    border: "none",
                },
                "&.Mui-focused fieldset": {
                    border: "none",
                },
                "& -webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill": {
                    "-webkit-text-fill-color": "#FFFFFF",
                    "-webkit-box-shadow": "0 0 0 100px #2B3036 inset !important",
                },
            }
        },

        MuiInputLabel: {
            root: {
                color: "#FFFFFF",
                "&$focused": {
                    color: "#8CCFE7"
                },
            },
        }
        
    },
})