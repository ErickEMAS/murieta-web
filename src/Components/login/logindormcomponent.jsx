import api from '../../services/api'
import { login } from '../../services/auth'
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom"
import styled from 'styled-components';
import { TextField, NoSsr, Grid } from '@material-ui/core';

import "./logindormcomponent.css"
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

const LoginFormComponent = () => {
  var history = useHistory()
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }

  const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();

  const onSubmit = (data) => {
    var body = {
      "email": data['email'],
      "password": data['senha']
    }

    api
      .post("/login", body, headers)
      .then((response) => {
        login(response.data);
        console.log(response.data)
        history.go(0)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    // console.log(data);
  };
  
  return (
    <Grid
      className="container-login"
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <div className="content-login">
          <h1 className="title">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
              <NoSsr>
                <StyledTextField fullWidth label="E-mail" variant="outlined" {...register("email", {
                  required: "E-mail obrigatório",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "E-mail inválido"
                  }})} 
              />
                
              {errors.email == undefined ? <p className="spacing"></p> : <p>{errors.email.message}</p>}

              <StyledTextField fullWidth variant="outlined" label="senha"
                {...register("senha", {
                  required: "Campo obrigatório",
                })}
              />
              {errors.senha == undefined ? <div className="spacing"></div> : <p>{errors.senha.message}</p>} 

              </NoSsr>

              <div className="forgot">
                <p>Esqueci minha senha</p>
              </div>

              <ButtonComponent title="Login" />
            </form>

        </div >
      </Grid>
      <Link className="link" to="/signup">Cadastrar-se</Link>
    </Grid>
    );
  };

export default LoginFormComponent;