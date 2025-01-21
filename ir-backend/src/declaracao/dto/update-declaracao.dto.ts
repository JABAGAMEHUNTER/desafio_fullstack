import { PartialType } from '@nestjs/swagger';
import { CreateDeclaracaoDto } from './create-declaracao.dto';

export class UpdateDeclaracaoDto extends PartialType(CreateDeclaracaoDto) {}
