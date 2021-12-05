import { CircularProgress } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#373C41",
        borderRadius: "25px",
        height: "90vh",
        width: "20vw",
        "& p": {
        color: "#bf1650",
        },
    },

    button: {
        backgroundColor: "#8CCFE7 !important",
        borderRadius: "10px !important",
        "& span": {
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "24px",
            lineHeight: "28px",
            textAlign: "center",
            color: "#000000",
            margin: "6px 0",
            textTransform: "none !important",
        }
    },
}));

const ButtonComponent = ({ submit, title, loading }) => {
    const classes = useStyles();

    return (
        <Button fullWidth className={classes.button} variant="contained" type="submit">
            {loading && <CircularProgress size={24}/>}{!loading && title}
        </Button>

    );
}

export default ButtonComponent;