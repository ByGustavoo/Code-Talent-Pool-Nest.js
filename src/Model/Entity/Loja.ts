import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Loja {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty({ message: "Erro! Por Favor, digite a descrição da Loja." })
    @MaxLength(60, { message: "Erro! A descrição não pode ter mais de 60 caracteres." })
    @Column({ type: 'varchar', length: 60 })
    descricao: string;
}