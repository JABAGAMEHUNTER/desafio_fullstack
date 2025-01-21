import { Button, Nav } from 'src/components';

export function Login() {
  return (
    <>
      <Nav />
      <div className="container">
      <h1>Login</h1>
      <p>
      </p>
      <form className="form">
        <label htmlFor="email">E-mail</label>
        <input type='email'></input>
        <label htmlFor="password">Senha</label>
        <input type='text'></input>
        <Button type="submit" variant="primary">Enviar</Button>
      </form>
      </div>
    </>
  );
}
