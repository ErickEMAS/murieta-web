import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import IsAutenticatedHOC from '../../HOC/IsAutenticatedHOC';
import NavbarComponent from '../../Components/nabbar/navbar_component';
import { makeStyles } from '@material-ui/core/styles';
let viewportHeight = window.innerHeight;

console.log(viewportHeight);

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    marginLeft: "-1rem"
  },

  graphicContainer: {
    "background-color": theme.palette.primary.main,
    height: `${viewportHeight * 0.86}px`,
    "border-radius": "20px",
  },

  grid: {
    height: "86vh",
  },

  cardContainer: {
    "background-color": "#2B3036",
    height: `${viewportHeight * 0.43 - 8}px`,
    "border-radius": "20px",
  },

}));

const HomePage = () => {
  const classes = useStyles();

    return (
      <Grid 
        className={classes.root}
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item xs={12}>
          <NavbarComponent/>
        </Grid>

        <Grid item xs={5}>
          <Box p={1}>
            <div className={classes.graphicContainer}>

            </div>
          </Box>
        </Grid>

        <Grid className={classes.grid} item xs={5}>
          <Grid container>
            <Grid item xs={6}>
              <Box p={1}>
                <div className={classes.cardContainer}>

                </div>
            </Box>
            </Grid>
            <Grid item xs={6}>
              <Box p={1}>
                <div className={classes.cardContainer}>

                </div>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box p={1}>
                <div className={classes.cardContainer}>

                </div>
              </Box>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    );
  };

export default IsAutenticatedHOC(HomePage);