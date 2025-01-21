import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const RendimentoValidacao = yup.object({
	nome_rendimemto: yup.string().required('Preencha o nome do rendimento'),
  origem_rendimento: yup.string().required('Preencha a origem do rendimento'),
  valor: yup.string().required('Preencha o valor do rendimento'),
  ano_fiscal: yup.date().required().typeError('Preencha o ano fiscal do rendimento'),
});

export const DeclaracaoRendimentoResolver = yupResolver(RendimentoValidacao);
