import './home.css'
import { Grid } from '@material-ui/core';
import IsAutenticatedHOC from '../../HOC/IsAutenticatedHOC';
import NavbarComponent from '../../Components/nabbar/navbar_component';

const HomePage = () => {
    return (
      <Grid container>
        <Grid item xs={12}>
          <NavbarComponent/>
        </Grid>
        <Grid item xs={12}>
          <h1>Home Page</h1>
        </Grid>
      </Grid>
    );
  };

export default IsAutenticatedHOC(HomePage);