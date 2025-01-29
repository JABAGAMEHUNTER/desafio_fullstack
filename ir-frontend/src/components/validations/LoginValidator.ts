import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const loginValidation = yup.object({
  email: yup.string().email().required().typeError('Insira o email'),
  password: yup.string().required().typeError('Insira a senha'),
});

export const loginResolver = yupResolver(loginValidation);
