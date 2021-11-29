import {ReactComponent as Logo} from '../../assets/logo.svg';
import { Grid } from '@material-ui/core';

import "./logocomponent.css"

const LogoComponent = () => {
  return (
    <Grid
      className="murieta-container"
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      >
        <Grid item>
          <div className="murieta-svg">
            <Logo fill="#8CCFE7"/>
          </div>
          <h1 className="murieta">Murieta</h1>
        </Grid>
    </Grid>
    );
  };

export default LogoComponent;