import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { ProdutoLojaDTO } from "src/Model/DTO/ProdutoLojaDTO";
import { ProdutoLoja } from "src/Model/Entity/ProdutoLoja";
import { ProdutoLojaService } from "src/Service/ProdutoLojaService";

@Controller('produtoloja')
export class ProdutoLojaController {
    constructor(private readonly produtoLojaService: ProdutoLojaService) { }


}

