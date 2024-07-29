import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';

export class ProdutoDTO {

  id: number;

  @IsNotEmpty({ message: 'ERRO! Por favor, digite a descrição do Produto.' })
  @MaxLength(60, {message: 'ERRO! A descrição não pode ter mais de 60 caracteres.'})
  descricao: string;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: 'ERRO! O custo deve ser um número.' })
  custo?: number;

  @IsOptional()
  imagem?: Buffer;
}
