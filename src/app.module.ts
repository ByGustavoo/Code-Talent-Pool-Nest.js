import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProdutoModule } from './Module/Produto.module';
import { LojaModule } from './Module/Loja.module';
import { ProdutoLojaModule } from './Module/ProdutoLoja.module';
import { Loja } from './Model/Entity/Loja';
import { Produto } from './Model/Entity/Produto';
import { ProdutoLoja } from './Model/Entity/ProdutoLoja';

@Module({
  imports: [
    ProdutoModule,
    LojaModule,
    ProdutoLojaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.getOrThrow('DATABASE_HOST'),
        port: configService.getOrThrow('DATABASE_PORT'),
        username: configService.getOrThrow('DATABASE_USERNAME'),
        password: configService.getOrThrow('DATABASE_PASSWORD'),
        database: configService.getOrThrow('DATABASE_NAME'),
        entities: [Loja, Produto, ProdutoLoja],
        migrations: [__dirname + '/Migrations/*.ts'],
        synchronize: false,
      }),
    }),
  ],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule {}
