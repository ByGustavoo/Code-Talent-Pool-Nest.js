import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { Produto } from './Produto';
import { Loja } from './Loja';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

@Entity('produtoloja')
export class ProdutoLoja {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty({ message: 'Erro! Por Favor, o campo Produto não pode estar vazio.' })
    @IsNumber({}, { message: 'Erro! O campo Produto deve ser um número.' })
    @ManyToOne(() => Produto, (produto) => produto.id, { lazy: true })
    @JoinColumn({ name: 'id_produto' })
    produto: Promise<Produto>;

    @IsNotEmpty({ message: 'Erro! Por Favor, o campo Loja não pode estar vazio.' })
    @IsNumber({}, { message: 'Erro! O campo Loja deve ser um número.' })
    @ManyToOne(() => Loja, (loja) => loja.id, { lazy: true })
    @JoinColumn({ name: 'id_loja' })
    loja: Promise<Loja>;

    @Type(() => Number)
    @IsOptional()
    @Column({ name: 'precovenda', type: 'numeric', precision: 13, scale: 3, nullable: true })
    precoVenda: number;
}
