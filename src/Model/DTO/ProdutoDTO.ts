import { Type } from "class-transformer";
import { IsNotEmpty, Length } from "class-validator";

export class ProdutoDTO {

    id: number;

    @IsNotEmpty({ message: "Erro! Por Favor, digite a descrição do Produto." })
    @Length(1, 60)
    descricao: string;

    @Type(() => Number)
    custo: number;

    imagem: Buffer;
}