import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoLojaController } from 'src/controller/ProdutoLojaController';
import { Messages } from 'src/messages/messages';
import { Loja } from 'src/model/entities/Loja';
import { Produto } from 'src/model/entities/Produto';
import { ProdutoLoja } from 'src/model/entities/ProdutoLoja';
import { ProdutoLojaService } from 'src/service/ProdutoLojaService';

@Module({
  imports: [TypeOrmModule.forFeature([ProdutoLoja, Produto, Loja])],
  providers: [ProdutoLojaService, Messages],
  controllers: [ProdutoLojaController],
})
export class ProdutoLojaModule {}
