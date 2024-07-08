import { IsNotEmpty, Length } from "class-validator";

export class LojaDTO {

    id: number;

    @IsNotEmpty({ message: "Erro! Por Favor, digite a descrição da Loja." })
    @Length(1, 60)
    descricao: string;
}