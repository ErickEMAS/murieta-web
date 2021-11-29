import './login.css'
import { Grid } from '@material-ui/core';
import LoginFormComponent from '../../Components/login/logindormcomponent';
import LogoComponent from '../../Components/logo/logocomponent';

const LoginPage = () => {
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
        <LoginFormComponent/>
      </Grid>
    </Grid>
    );
  };

export default LoginPage;