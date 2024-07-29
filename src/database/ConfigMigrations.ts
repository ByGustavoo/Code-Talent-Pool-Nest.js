import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Loja } from 'src/model/entities/Loja';
import { Produto } from 'src/model/entities/Produto';
import { ProdutoLoja } from 'src/model/entities/ProdutoLoja';
import { DataSource, DataSourceOptions } from 'typeorm';

config(); 

const configService = new ConfigService();

const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: configService.getOrThrow('DATABASE_HOST'),
    port: configService.getOrThrow('DATABASE_PORT'),
    username: configService.getOrThrow('DATABASE_USERNAME'),
    password: configService.getOrThrow('DATABASE_PASSWORD'),
    database: configService.getOrThrow('DATABASE_NAME'),
    entities: [Loja, Produto, ProdutoLoja],
    migrations: [__dirname + '/migrations/*.ts'],
    synchronize: true,
}

export default new DataSource(dataSourceOptions);