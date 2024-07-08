import { Type } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty({ message: "Erro! Por Favor, digite a descrição do Produto." })
    @Column({ type: 'varchar', length: 60 })
    descricao: string;

    @Type(() => Number)
    @Column({ type: 'numeric', precision: 13, scale: 3, nullable: true })
    custo: number;

    @Column({ type: 'bytea', nullable: true })
    imagem: Buffer;
}