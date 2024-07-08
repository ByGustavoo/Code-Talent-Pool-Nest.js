import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "./Produto";
import { Loja } from "./Loja";
import { Type } from "class-transformer";

@Entity()
export class ProdutoLoja {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Produto, (produto) => produto.id)
    @JoinColumn({ name: 'id_produto' })
    produto: Produto;

    @ManyToOne(() => Loja, (loja) => loja.id)
    @JoinColumn({ name: 'id_loja' })
    loja: Loja;

    @Type(() => Number)
    @Column({ type: 'numeric', precision: 13, scale: 3, nullable: true })
    precoVenda: number;
}