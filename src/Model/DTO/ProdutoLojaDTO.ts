import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class ProdutoLojaDTO {
  
  id: number;

  @IsNotEmpty({message: 'ERRO! Por Favor, o campo Produto não pode estar vazio.'})
  @IsNumber({}, { message: 'ERRO! O campo Produto deve ser um número.' })
  produto: number;

  @IsNotEmpty({message: 'ERRO! Por Favor, o campo Loja não pode estar vazio.'})
  @IsNumber({}, { message: 'ERRO! O campo Loja deve ser um número.' })
  loja: number;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: 'ERRO! O campo preço venda deve ser um número.' })
  precoVenda?: number;
}
