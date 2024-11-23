import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { LojaDTO } from 'src/model/dto/LojaDTO';
import { LojaService } from 'src/service/LojaService';

@Controller('loja')
export class LojaController {
  constructor(private readonly lojaService: LojaService) {}

  @Get(':id')
  findOne(@Param('id') id: number): Promise<LojaDTO> {
    return this.lojaService.findOne(id);
  }

  @Get()
  findAll(): Promise<LojaDTO[]> {
    return this.lojaService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createStore(@Body() loja: LojaDTO): Promise<LojaDTO> {
    return this.lojaService.createStore(loja);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  updateStore(@Param('id') id: number, @Body() loja: LojaDTO) {
    return this.lojaService.updateStore(id, loja);
  }

  @Delete(':id')
  deleteStore(@Param('id') id: number) {
    return this.lojaService.deleteStore(id);
  }
}