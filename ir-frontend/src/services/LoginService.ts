import { IsendLogin } from "src/interfaces";
import { Api } from "src/providers";

const Login = (data: IsendLogin) => Api.post('/auth/signin', data);


export const LoginService = {
  Login
};
