import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Loja {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty({ message: "Erro! Por Favor, digite a descrição da Loja." })
    @Column({ type: 'varchar', length: 60 })
    descricao: string;
}