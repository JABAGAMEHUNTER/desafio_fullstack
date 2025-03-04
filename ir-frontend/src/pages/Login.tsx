import { Button, Nav } from 'src/components';
import { FormProvider, useForm } from 'react-hook-form';
import { loginResolver } from '@components/validations';
import { IsendLogin } from 'src/interfaces';
import { LoginService } from 'src/services';
import { useContext, useState } from 'react';
import { LoginContext } from 'src/context';
import {useNavigate} from 'react-router-dom';

export interface Token {
  response_token: string;
}

export function Login() {
  //funcao que chama interface de login e validador de dados do login
  //os dados sao passados para o formMethods

  const formMethods = useForm<IsendLogin>({ resolver: loginResolver });
  const auth = useContext(LoginContext);
  const navigate = useNavigate();
  //const [ token, setToken ] = useState<string>();
  //Funcao que maneja formulario
  //cria uma constante chamada formState e passa os dados do formMethods
  const { formState: { errors },
    register,
    handleSubmit,
    reset,
  } = formMethods;


  //constante de token de acesso criado para guardar o token de login
  //Funcao de login usando loginService
  async function onSubmit(values: any) {
    const { status, data } = await LoginService.Login(values);
    //const token = data.access_token;
    auth?.setToken(data.access_token);  
    localStorage.setItem("token", data.access_token);
      if (status === 200) {
        console.log("token:", localStorage.getItem("token"));
        navigate("/historico");
      }
  }
  return (
    <>
      <Nav />
      <div className="container">
      <h1>Login</h1>
      <p>
      </p>
      <FormProvider {...formMethods}>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">E-mail</label>
        <input {...register('email')} type="email"></input>
          {errors?.email?.message && (
            <p className="error-text">{errors?.email?.message}</p>
          )}
        <label htmlFor="password">Senha</label>
        <input {...register('password')} type="text"></input>
          {errors?.password?.message && (
            <p className="error-text">{errors?.password?.message}</p>
          )}
        <Button type="submit" variant="primary">Enviar</Button>
      </form>
      </FormProvider>
      </div>
    </>
  );
}
