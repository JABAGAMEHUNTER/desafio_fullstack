import {IDeclaracaoRendimento} from "src/interfaces";
import { Api } from "src/providers";

const createDeclaracao = (data: IDeclaracaoRendimento) => Api.post('/declaracao', data);


const getDeclaracao = () => Api.get<any>('/declaracao');

export const DeclaracaoService = {
  createDeclaracao, getDeclaracao
};
