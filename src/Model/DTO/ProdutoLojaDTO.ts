import { Type } from "class-transformer";
import { ProdutoDTO } from "../DTO/ProdutoDTO";
import { LojaDTO } from "../DTO/LojaDTO";
import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class ProdutoLojaDTO {

    id: number;

    @IsNotEmpty({ message: 'Erro! Por Favor, o campo Produto não pode estar vazio.' })
    @IsNumber({}, { message: 'Erro! O campo Produto deve ser um número.' })
    Produto: ProdutoDTO;

    @IsNotEmpty({ message: 'Erro! Por Favor, o campo Loja não pode estar vazio.' })
    @IsNumber({}, { message: 'Erro! O campo Loja deve ser um número.' })
    Loja: LojaDTO;

    @Type(() => Number)
    @IsOptional()
    @IsNumber({}, { message: "Erro! O campo preço venda deve ser um número." })
    precoVenda?: number;
}