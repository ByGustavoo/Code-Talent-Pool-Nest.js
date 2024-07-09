import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { LojaDTO } from "src/Model/DTO/LojaDTO";
import { LojaService } from "src/Service/LojaService";

@Controller('loja')
export class LojaController {
    constructor(private readonly lojaService: LojaService) { }

    @Get()
    getLojas(): Promise<LojaDTO[]> {
        return this.lojaService.findAll();
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    criarLoja(@Body() loja: LojaDTO): Promise<LojaDTO> {
        return this.lojaService.criarLoja(loja);
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    atualizarLoja(@Param('id') id: number, @Body() loja: LojaDTO) {
        return this.lojaService.atualizarLoja(id, loja);
    }

    @Delete(':id')
    excluirLoja(@Param('id') id: number) {
        return this.lojaService.excluirLoja(id);
    }
}

