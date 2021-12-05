import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom"
import { TextField, NoSsr, Grid } from '@material-ui/core';
import ButtonComponent from '../button/buttoncomponent';
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

  contentLogin: {
    width: "17vw",
  },

  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "64px",
    lineHeight: "75px",
    marginBottom: "17vh",
    color: "#FFFFFF",
  },

  forgot : {
    "& p": {
      textAlign: "end",
      color: "#FFFFFF",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "18px",
      lineHeight: "21px",
      marginBottom: "12vh !important",
    },
  },

  form: {
    "& p": {
      marginLeft: "16px",
      marginBottom: "16px",
    },
  },

  link: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "21px",
    color: "#E8BC8E",
    textAlign: "center",
    margin: "16px",
  },  
  
    spacing: {
      height: "16px",
    },
}));

const LoginFormComponent = ( props ) => {
  const classes = useStyles();
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <div className={classes.contentLogin}>
          <h1 className={classes.title}>Login</h1>
          <form className={classes.form} onSubmit={handleSubmit(props.onSubmit)}>
              <NoSsr>
                <TextField fullWidth label="E-mail" variant="outlined" {...register("email", {
                  required: "E-mail obrigatório",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "E-mail inválido"
                  }})} 
              />
                
              {errors.email == undefined ? <p className={classes.spacing}></p> : <p>{errors.email.message}</p>}

              <TextField fullWidth variant="outlined" label="senha"
                {...register("password", {
                  required: "Campo obrigatório",
                })}
              />
              {errors.password == undefined ? <div className={classes.spacing}></div> : <p>{errors.password.message}</p>} 

              </NoSsr>

              <div className={classes.forgot}>
                <p>Esqueci minha senha</p>
              </div>

              <ButtonComponent loading={props.loading} title="Login" />
            </form>

        </div >
      </Grid>
      <Link className={classes.link} to="/signup">Cadastrar-se</Link>
    </Grid>
    );
  };

export default LoginFormComponent;