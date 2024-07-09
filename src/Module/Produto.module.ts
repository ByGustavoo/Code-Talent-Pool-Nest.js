import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutoController } from "src/Controller/ProdutoController";
import { Produto } from "src/Model/Entity/Produto";
import { ProdutoService } from "src/Service/ProdutoService";

@Module({
    imports: [TypeOrmModule.forFeature([Produto])],
    providers: [ProdutoService],
    controllers: [ProdutoController]
})
export class ProdutoModule {}