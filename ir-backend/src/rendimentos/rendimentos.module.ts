import { Module, forwardRef } from '@nestjs/common';
import { RendimentosService } from './rendimentos.service';
import { RendimentosController } from './rendimentos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rendimento } from './entities/rendimento.entity';
import {AuthModule} from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Rendimento]), forwardRef(() => AuthModule)],
  controllers: [RendimentosController],
  providers: [RendimentosService],
  exports: [RendimentosService],
})
export class RendimentosModule {}
