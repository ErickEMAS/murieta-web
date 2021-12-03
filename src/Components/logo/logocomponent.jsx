import {ReactComponent as Logo} from '../../assets/logo.svg';
import { Grid } from '@material-ui/core';
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

  murieta: {
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal !important",
    margin: "0",
    fontSize: "5.8vw",
  },

  murietaSvg: {
    width: "10vw",
    height: "10vw",
    margin: "auto",
    "& svg": {
      width: "100%",
      height: "100%",
    },
  },

  murietaContainer: {
    width: "20vw",
    height: "90vh",
    margin: "auto",
  },

}));

const LogoComponent = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.murietaContainer}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      >
        <Grid item>
          <div className={classes.murietaSvg}>
            <Logo fill="#8CCFE7"/>
          </div>
          <h1 className={classes.murieta}>Murieta</h1>
        </Grid>
    </Grid>
    );
  };

export default LogoComponent;