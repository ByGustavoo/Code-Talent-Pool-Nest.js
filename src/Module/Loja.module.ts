import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Loja } from "src/Model/Entity/Loja";
import { LojaService } from "src/Service/LojaService";
import { LojaController } from "src/Controller/LojaController";
import { ProdutoLoja } from "src/Model/Entity/ProdutoLoja";

@Module({
    imports: [TypeOrmModule.forFeature([Loja, ProdutoLoja])],
    providers: [LojaService],
    controllers: [LojaController]
})
export class LojaModule { }