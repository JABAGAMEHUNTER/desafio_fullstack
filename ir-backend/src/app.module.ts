import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import {Declaracao} from './declaracao/entities/declaracao.entity';
import {Rendimento} from './rendimentos/entities/rendimento.entity';
import {DeclaracaoModule} from './declaracao/declaracao.module';
import {RendimentosModule} from './rendimentos/rendimentos.module';
import { AuthModule } from './auth/auth.module';
//import { CacheController } from './cache/cache.controller';
//import { CacheService } from './cache/cache.service';
//import { AppCacheModule } from './cache/cache.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [User, Declaracao, Rendimento],
        synchronize: true, //use synchronize false for production
//        logging: true,
      }),
      inject: [ConfigService],
    }),
    UserModule,
    DeclaracaoModule,
    RendimentosModule,
    AuthModule,
//    AppCacheModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
