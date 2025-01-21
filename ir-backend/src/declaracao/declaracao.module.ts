import { Module, forwardRef } from '@nestjs/common';
import { DeclaracaoService } from './declaracao.service';
import { DeclaracaoController } from './declaracao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Declaracao } from './entities/declaracao.entity';
import {AuthModule} from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Declaracao]), forwardRef(() => AuthModule)],
  controllers: [DeclaracaoController],
  providers: [DeclaracaoService],
  exports: [DeclaracaoService],
})
export class DeclaracaoModule {}
