import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty({ message: "Erro! Por favor, digite a descrição do Produto." })
    @MaxLength(60, { message: "Erro! A descrição não pode ter mais de 60 caracteres." })
    @Column({ type: 'varchar', length: 60 })
    descricao: string;

    @Type(() => Number)
    @IsNumber({}, { message: "Erro! O custo deve ser um número." })
    @Column({ type: 'numeric', precision: 13, scale: 3, nullable: true })
    custo: number;

    @Column({ type: 'bytea', nullable: true })
    imagem: Buffer;
}