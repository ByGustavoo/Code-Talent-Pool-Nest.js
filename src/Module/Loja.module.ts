import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loja } from 'src/model/entities/Loja';
import { LojaService } from 'src/Service/LojaService';
import { LojaController } from 'src/Controller/LojaController';
import { ProdutoLoja } from 'src/model/entities/ProdutoLoja';

@Module({
  imports: [TypeOrmModule.forFeature([Loja, ProdutoLoja])],
  providers: [LojaService],
  controllers: [LojaController],
})
export class LojaModule {}
