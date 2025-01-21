import { useState } from 'react';
import { Button, Nav } from 'src/components';

function initialState() {
  return {email: '', password: ''};
}

export function Login() {
  const [values, setValues] = useState(initialState);

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  return (
    <>
      <Nav />
      <div className="container">
      <h1>Login</h1>
      <p>
      </p>
      <form className="form">
        <label htmlFor="email">E-mail</label>
        <input name="email" type='email' onChange={onChange} value={values.email}></input>
        <label htmlFor="password">Senha</label>
        <input name="password" type='text' onChange={onChange} value={values.password}></input>
        <Button type="submit" variant="primary">Enviar</Button>
      </form>
      </div>
    </>
  );
}
