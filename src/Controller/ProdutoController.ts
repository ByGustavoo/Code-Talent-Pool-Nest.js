import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProdutoDTO } from 'src/model/dto/ProdutoDTO';
import { ProdutoService } from 'src/service/ProdutoService';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ProdutoDTO> {
    return this.produtoService.findOne(id);
  }

  @Get()
  findAll(): Promise<ProdutoDTO[]> {
    return this.produtoService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createProduct(@Body() produto: ProdutoDTO): Promise<ProdutoDTO> {
    return this.produtoService.createProduct(produto);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  updateProduct(@Param('id') id: number, @Body() produto: ProdutoDTO) {
    return this.produtoService.updateProduct(id, produto);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number) {
    return this.produtoService.deleteProduct(id);
  }
}