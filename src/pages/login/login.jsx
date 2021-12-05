import { Grid, Backdrop } from "@material-ui/core";
import LoginFormComponent from "../../Components/login/logindormcomponent";
import LogoComponent from "../../Components/logo/logocomponent";
import { makeStyles } from "@material-ui/core/styles";
import useLogin from "../../HOOKs/use_login";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const { mutate, isLoading } = useLogin();

  return (
    <>
      <Grid
        className={classes.root}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={7}>
          <div>
            <LogoComponent />
          </div>
        </Grid>
        <Grid item xs={3}>
          <LoginFormComponent loading={isLoading} onSubmit={mutate} />
        </Grid>
      </Grid>
    </>
  );
};

export default LoginPage;
