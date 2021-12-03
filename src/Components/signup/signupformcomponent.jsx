import api from '../../services/api'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom"
import { TextField, NoSsr, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ButtonComponent from '../button/buttoncomponent';

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

const SignUpFormComponent = () => {
  const classes = useStyles();
  var history = useHistory()
  var [error, setError] = useState("");
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }

  const {
      register,
      handleSubmit,
      watch,
      formState: { errors }
    } = useForm();

  const onSubmit = (data) => {
    setError("");
    var body = {
      "nome": data['name'],
      "email": data['email'],
      "password": data['senha'],
      "passwordConfirm": data['confirmar_senha']
    }

    api
      .post("/user/sign-up", body, headers)
      .then((response) => {
        history.push("/login")
      })
      .catch((error) => {
        console.log(error.response.data);
        setError(error.response.data.toString());
    });
    // console.log(data);
  };

  const watch_senha = watch("senha");
  
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
          <form onSubmit={handleSubmit(onSubmit)}>
              <NoSsr>
              <TextField fullWidth variant="outlined" label="nome"
                {...register("name", {
                  required: "Nome obrigatório",
                })}
              />

              {errors.name == undefined ? <p className={classes.spacing}></p> : <p>{errors.name.message}</p>}

              <TextField fullWidth variant="outlined" label="email"  {...register("email", {
                required: "E-mail obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "E-mail inválido"
                }})} 
              />
              
              {errors.email == undefined ? <p className={classes.spacing}></p> :  <p>{errors.email.message}</p>}

              <TextField fullWidth variant="outlined" label="senha"
                {...register("senha", {
                  required: "Senha obrigatório",
                })}
              />

              {errors.senha == undefined ? <p className={classes.spacing}></p> : <p>{errors.senha.message}</p>}

              <TextField fullWidth variant="outlined" label="confirmar senha"
                {...register("confirmar_senha", {
                  required: "Confirmação de senha obrigatório",
                  minLength: { value: 6, message: "Muito curto" },
                  validate: (value) => {
                    return value === watch_senha || "Senha não confere";
                  }
                })}
              />
              
              {errors.confirmar_senha == undefined ? <p className={classes.spacing}></p> :  <p>{errors.confirmar_senha.message}</p>} 

              </NoSsr>
              <h3>{error}</h3>

              <ButtonComponent title="Cadastrar" />
            </form>

        </div >
      </Grid>
      <Link className={classes.link} to="/login">Login</Link>
    </Grid>
    );
  };

export default SignUpFormComponent;