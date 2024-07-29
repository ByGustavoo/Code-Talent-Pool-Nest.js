import { IsNotEmpty, MaxLength } from 'class-validator';

export class LojaDTO {

  id: number;

  @IsNotEmpty({ message: 'ERRO! Por Favor, digite a descrição da Loja.' })
  @MaxLength(60, {message: 'ERRO! A descrição não pode ter mais de 60 caracteres.'})
  descricao: string;
}
