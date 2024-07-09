import { IsNotEmpty, Length, MaxLength } from "class-validator";

export class LojaDTO {

    id: number;

    @IsNotEmpty({ message: "Erro! Por Favor, digite a descrição da Loja." })
    @MaxLength(60)
    descricao: string;
}