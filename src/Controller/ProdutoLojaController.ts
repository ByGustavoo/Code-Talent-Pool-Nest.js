import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProdutoLojaDTO } from 'src/model/dto/ProdutoLojaDTO';
import { ProdutoLojaService } from 'src/Service/ProdutoLojaService';

@Controller('produtoloja')
export class ProdutoLojaController {
  constructor(private readonly produtoLojaService: ProdutoLojaService) {}

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ProdutoLojaDTO> {
    return this.produtoLojaService.findOne(id);
  }

  @Get()
  findAll(): Promise<ProdutoLojaDTO[]> {
    return this.produtoLojaService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  criarProdutoLoja(@Body() produto: ProdutoLojaDTO): Promise<ProdutoLojaDTO> {
    return this.produtoLojaService.criarProdutoLoja(produto);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  atualizarProdutoLoja(
    @Param('id') id: number,
    @Body() produto: ProdutoLojaDTO,
  ) {
    return this.produtoLojaService.atualizarProdutoLoja(id, produto);
  }

  @Delete(':id')
  excluirProdutoLoja(@Param('id') id: number) {
    return this.produtoLojaService.excluirProdutoLoja(id);
  }
}
