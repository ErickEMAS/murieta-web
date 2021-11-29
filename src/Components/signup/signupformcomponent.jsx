import api from '../../services/api'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom"
import styled from 'styled-components';
import { TextField, NoSsr, Grid } from '@material-ui/core';

import "./signupformcomponent.css"
import ButtonComponent from '../button/buttoncomponent';

const StyledTextField = styled(TextField)`
  label{
    color: #FFFFFF;
  }
  input{
    color: #FFFFFF;
    border-radius: 10px;
    width: 364px;
    background-color: #2B3036;
  }
  label.Mui-focused {
    color: #8CCFE7;
  }
  .MuiInputLabel-shrink {
    color: #8CCFE7;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border: none;
    }
    &:hover fieldset {
      border: none;
    }
    &.Mui-focused fieldset {
      border: none;
    }
  }
`;

const SignUpFormComponent = () => {
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
      className="container-signup"
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <div className="content-signup">
          <h1 className="title">Sign-Up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
              <NoSsr>
              <StyledTextField fullWidth variant="outlined" label="nome"
                {...register("name", {
                  required: "Nome obrigatório",
                })}
              />

              {errors.name == undefined ? <p className="spacing"></p> : <p>{errors.name.message}</p>}

              <StyledTextField fullWidth variant="outlined" label="email"  {...register("email", {
                required: "E-mail obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "E-mail inválido"
                }})} 
              />
              
              {errors.email == undefined ? <p className="spacing"></p> :  <p>{errors.email.message}</p>}

              <StyledTextField fullWidth variant="outlined" label="senha"
                {...register("senha", {
                  required: "Senha obrigatório",
                })}
              />

              {errors.senha == undefined ? <p className="spacing"></p> : <p>{errors.senha.message}</p>}

              <StyledTextField fullWidth variant="outlined" label="confirmar senha"
                {...register("confirmar_senha", {
                  required: "Confirmação de senha obrigatório",
                  minLength: { value: 6, message: "Muito curto" },
                  validate: (value) => {
                    return value === watch_senha || "Senha não confere";
                  }
                })}
              />
              
              {errors.confirmar_senha == undefined ? <p className="spacing"></p> :  <p>{errors.confirmar_senha.message}</p>} 

              </NoSsr>
              <h3>{error}</h3>

              <ButtonComponent title="Cadastrar" />
            </form>

        </div >
      </Grid>
      <Link className="link" to="/signup">Login</Link>
    </Grid>
    );
  };

export default SignUpFormComponent;