import { Grid } from "@material-ui/core";
import SignUpFormComponent from "../../Components/signup/signupformcomponent";
import LogoComponent from "../../Components/logo/logocomponent";
import { makeStyles } from "@material-ui/core/styles";
import useSignup from "../../HOOKs/use_signup";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));

const Signup = () => {
  const classes = useStyles();
  const { mutate, isLoading } = useSignup();

  return (
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
        <SignUpFormComponent onSubmit={mutate} />
      </Grid>
    </Grid>
  );
};

export default Signup;
