import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const DeclaracaoValidacao = yup.object({
  ano_fiscal: yup.date().required().typeError('Insira a data'),
  total_rendimentos_tributaveis: yup.number().required().typeError('Preencha o total de rendimentos'),
  imposto_devido: yup.number().required().typeError('Preencha o valor'),
  imposto_restituir: yup.number().required().typeError('Preencha o valor'),
  total_pagar: yup.number().required().typeError('Preencha o valor'),
  saldo_imposto_pagar: yup.number().required().typeError('Preencha o valor'),
  restituicao: yup.number().required().typeError('Preencha o valor'),
  total_rendimentos: yup.number().required().typeError('Preencha o valor'),
});

export const DeclaracaoResolver = yupResolver(DeclaracaoValidacao);
