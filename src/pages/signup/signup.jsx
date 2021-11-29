import './signup.css'
import { Grid } from '@material-ui/core';
import SignUpFormComponent from '../../Components/signup/signupformcomponent'
import LogoComponent from '../../Components/logo/logocomponent';

const Signup = () => {
    return (
      <Grid 
      className="container-login-page"
      container
      direction="row"
      justifyContent="center"
      alignItems="center">
      <Grid item xs={7}>
        <div>
          <LogoComponent/>
        </div>
      </Grid>
      <Grid item xs={3}>
        <SignUpFormComponent/>
      </Grid>
    </Grid>
    );
  };

export default Signup;