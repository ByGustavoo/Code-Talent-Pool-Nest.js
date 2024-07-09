import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Loja } from "src/Model/Entity/Loja";
import { LojaService } from "src/Service/LojaService";
import { LojaController } from "src/Controller/LojaController";

@Module({
    imports: [TypeOrmModule.forFeature([Loja])],
    providers: [LojaService],
    controllers: [LojaController]
})
export class LojaModule { }