import { IsNotEmpty } from 'class-validator';
import {Column} from 'typeorm';

export class CreateRendimentoDto {

  @IsNotEmpty()
  nome_rendimemto: string;

  @IsNotEmpty()
  origem_rendimento: string;

  @IsNotEmpty()
  valor: number;

  @IsNotEmpty()
  ano_fiscal: Date;

  @Column()
  isActive: boolean;
}
