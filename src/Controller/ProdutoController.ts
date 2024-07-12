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
import { ProdutoDTO } from 'src/Model/DTO/ProdutoDTO';
import { ProdutoService } from 'src/Service/ProdutoService';

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
  criarProduto(@Body() produto: ProdutoDTO): Promise<ProdutoDTO> {
    return this.produtoService.criarProduto(produto);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  atualizarProduto(@Param('id') id: number, @Body() produto: ProdutoDTO) {
    return this.produtoService.atualizarProduto(id, produto);
  }

  @Delete(':id')
  excluirProduto(@Param('id') id: number) {
    return this.produtoService.excluirProduto(id);
  }
}
