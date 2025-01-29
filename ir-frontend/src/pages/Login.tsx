import { Button, Nav } from 'src/components';
import { FormProvider, useForm } from 'react-hook-form';
import { loginResolver } from '@components/validations';
import { IsendLogin } from 'src/interfaces';
import { LoginService } from 'src/services';

export function Login() {
  const formMethods = useForm<IsendLogin>({ resolver: loginResolver });
  const { formState: { errors },
    register,
    handleSubmit,
    reset,
  } = formMethods;
  async function onSubmit(values: any) {
      console.log(values);
      const { status, data } = await LoginService.Login(values);
      if (status === 201) {
        console.log('data', data);
        reset()
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
