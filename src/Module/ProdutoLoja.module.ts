import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutoLojaController } from "src/Controller/ProdutoLojaController";
import { ProdutoLoja } from "src/Model/Entity/ProdutoLoja";
import { ProdutoLojaService } from "src/Service/ProdutoLojaService";

@Module({
    imports: [TypeOrmModule.forFeature([ProdutoLoja])],
    providers: [ProdutoLojaService],
    controllers: [ProdutoLojaController]
})
export class ProdutoLojaModule {}