import { Type } from "class-transformer";
import { ProdutoDTO } from "../DTO/ProdutoDTO";
import { LojaDTO } from "../DTO/LojaDTO";
import { IsNotEmpty } from "class-validator";

export class ProdutoLojaDTO {

    id: number;

    @Type(() => ProdutoDTO)
    @IsNotEmpty({ message: 'Erro! Por Favor, o campo Produto não pode estar vazio.' })
    Produto: ProdutoDTO;

    @Type(() => LojaDTO)
    @IsNotEmpty({ message: 'Erro! Por Favor, o campo Loja não pode estar vazio.' })
    Loja: LojaDTO;

    @Type(() => Number)
    precoVenda: number;
}