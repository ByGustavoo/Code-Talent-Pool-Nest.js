import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
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
  createProductStore(@Body() produto: ProdutoLojaDTO): Promise<ProdutoLojaDTO> {
    return this.produtoLojaService.createProductStore(produto);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  updateProductStore(@Param('id') id: number, @Body() produto: ProdutoLojaDTO) {
    return this.produtoLojaService.updateProductStore(id, produto);
  }

  @Delete(':id')
  deleteProductStore(@Param('id') id: number) {
    return this.produtoLojaService.deleteProductStore(id);
  }
}
