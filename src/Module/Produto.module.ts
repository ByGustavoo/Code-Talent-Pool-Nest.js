import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoController } from 'src/controller/ProdutoController';
import { Messages } from 'src/messages/messages';
import { Produto } from 'src/model/entities/Produto';
import { ProdutoLoja } from 'src/model/entities/ProdutoLoja';
import { ProdutoService } from 'src/service/ProdutoService';

@Module({
  imports: [TypeOrmModule.forFeature([Produto, ProdutoLoja])],
  providers: [ProdutoService, Messages],
  controllers: [ProdutoController],
})
export class ProdutoModule {}
