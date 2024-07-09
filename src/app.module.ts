import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loja } from './Model/Entity/Loja';
import { Produto } from './Model/Entity/Produto';
import { ProdutoLoja } from './Model/Entity/ProdutoLoja';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProdutoModule } from './Module/Produto.module';

@Module({
  imports: [ 
    ProdutoModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.getOrThrow('POSTGRES_HOST'),
        port: configService.getOrThrow('POSTGRES_PORT'),
        username: configService.getOrThrow('POSTGRES_USERNAME'),
        password: configService.getOrThrow('POSTGRES_PASSWORD'),
        database: configService.getOrThrow('POSTGRES_DATABASE'),
        entities: [Loja, Produto, ProdutoLoja],
        synchronize: true,
      })
  }),
],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}

