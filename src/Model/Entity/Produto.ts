import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('produto')
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty({ message: "Erro! Por favor, digite a descrição do Produto." })
    @MaxLength(60, { message: "Erro! A descrição não pode ter mais de 60 caracteres." })
    @Column({ name: 'descricao', type: 'varchar', length: 60 })
    descricao: string;

    @Type(() => Number)
    @IsOptional()
    @IsNumber({}, { message: "Erro! O custo deve ser um número." })
    @Column({ name: 'custo', type: 'numeric', precision: 13, scale: 3, nullable: true })
    custo: number;

    @IsOptional()
    @Column({ name: 'imagem', type: 'bytea', nullable: true })
    imagem: Buffer;
}