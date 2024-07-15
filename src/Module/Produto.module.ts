import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoController } from 'src/Controller/ProdutoController';
import { Produto } from 'src/model/entities/Produto';
import { ProdutoLoja } from 'src/model/entities/ProdutoLoja';
import { ProdutoService } from 'src/Service/ProdutoService';

@Module({
  imports: [TypeOrmModule.forFeature([Produto, ProdutoLoja])],
  providers: [ProdutoService],
  controllers: [ProdutoController],
})
export class ProdutoModule {}
