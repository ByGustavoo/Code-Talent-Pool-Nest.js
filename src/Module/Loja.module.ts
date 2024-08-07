import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loja } from 'src/model/entities/Loja';
import { LojaService } from 'src/service/LojaService';
import { LojaController } from 'src/controller/LojaController';
import { ProdutoLoja } from 'src/model/entities/ProdutoLoja';
import { Messages } from 'src/messages/messages';

@Module({
  imports: [TypeOrmModule.forFeature([Loja, ProdutoLoja])],
  providers: [LojaService, Messages],
  controllers: [LojaController],
})
export class LojaModule {}
