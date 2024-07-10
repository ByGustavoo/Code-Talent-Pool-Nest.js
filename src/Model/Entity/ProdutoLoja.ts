import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { Produto } from './Produto';
import { Loja } from './Loja';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ProdutoDTO } from '../DTO/ProdutoDTO';
import { LojaDTO } from '../DTO/LojaDTO';

@Entity('produtoloja')
export class ProdutoLoja {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty({ message: 'Erro! Por Favor, o campo Produto não pode estar vazio.' })
    @IsNumber({}, { message: 'Erro! O campo Produto deve ser um número.' })
    @Column({ name: 'id_produto' })
    produto: number;

    @IsNotEmpty({ message: 'Erro! Por Favor, o campo Loja não pode estar vazio.' })
    @IsNumber({}, { message: 'Erro! O campo Loja deve ser um número.' })
    @Column({ name: 'id_loja' })
    loja: number;

    @Type(() => Number)
    @IsOptional()
    @Column({ name: 'precovenda', type: 'numeric', precision: 13, scale: 3, nullable: true })
    precoVenda: number;
}
