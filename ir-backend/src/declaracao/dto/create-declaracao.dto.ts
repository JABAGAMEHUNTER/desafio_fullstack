import { IsNotEmpty } from 'class-validator';
import {Column} from 'typeorm';

export class CreateDeclaracaoDto {

  @IsNotEmpty()
  ano_fiscal: Date;

  @IsNotEmpty()
  total_rendimentos_tributaveis: number;

  @IsNotEmpty()
  imposto_devido: number;

  @IsNotEmpty()
  imposto_restituir: number;

  @IsNotEmpty()
  total_pagar: number;

  @IsNotEmpty()
  saldo_imposto_pagar: number;

  @IsNotEmpty()
  restituicao: number;


  @IsNotEmpty()
  total_rendimentos: number;

}
