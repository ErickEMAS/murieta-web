import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { TextField, NoSsr, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ButtonComponent from "../button/buttoncomponent";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#373C41",
    borderRadius: "25px",
    height: "90vh",
    width: "20vw",
    "& p, h3": {
      color: "#bf1650",
    },
  },

  contentSignup: {
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

const SignUpFormComponent = (props) => {
  const classes = useStyles();
  var [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const watch_senha = watch("password");

  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <div className={classes.contentSignup}>
          <h1 className={classes.title}>Sign-Up</h1>
          <form onSubmit={handleSubmit(props.onSubmit)}>
            <NoSsr>
              <TextField
                fullWidth
                variant="outlined"
                label="Nome"
                {...register("nome", {
                  required: "Nome obrigatório",
                })}
              />

              {errors.name == undefined ? (
                <p className={classes.spacing}></p>
              ) : (
                <p>{errors.name.message}</p>
              )}

              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                {...register("email", {
                  required: "E-mail obrigatório",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "E-mail inválido",
                  },
                })}
              />

              {errors.email == undefined ? (
                <p className={classes.spacing}></p>
              ) : (
                <p>{errors.email.message}</p>
              )}

              <TextField
                fullWidth
                variant="outlined"
                label="Senha"
                {...register("password", {
                  required: "Senha obrigatório",
                })}
              />

              {errors.senha == undefined ? (
                <p className={classes.spacing}></p>
              ) : (
                <p>{errors.senha.message}</p>
              )}

              <TextField
                fullWidth
                variant="outlined"
                label="Confirmar Senha"
                {...register("passwordConfirm", {
                  required: "Confirmação de senha obrigatório",
                  minLength: { value: 6, message: "Muito curto" },
                  validate: (value) => {
                    return value === watch_senha || "Senha não confere";
                  },
                })}
              />

              {errors.passwordConfirm == undefined ? (
                <p className={classes.spacing}></p>
              ) : (
                <p>{errors.passwordConfirm.message}</p>
              )}
            </NoSsr>
            <h3>{error}</h3>

            <ButtonComponent title="Cadastrar" />
          </form>
        </div>
      </Grid>
      <Link className={classes.link} to="/login">
        Login
      </Link>
    </Grid>
  );
};

export default SignUpFormComponent;
