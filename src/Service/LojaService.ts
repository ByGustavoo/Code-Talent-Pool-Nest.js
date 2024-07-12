import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LojaDTO } from "src/Model/DTO/LojaDTO";
import { Loja } from "src/Model/Entity/Loja";
import { ProdutoLoja } from "src/Model/Entity/ProdutoLoja";
import { Repository } from "typeorm";

@Injectable()
export class LojaService {
    constructor(@InjectRepository(Loja) private lojaRepository: Repository<Loja>,
        @InjectRepository(ProdutoLoja) private produtoLojaRepository: Repository<ProdutoLoja>
    ) { }


    async findOne(id: number): Promise<LojaDTO> {
        const procurarLoja = await this.lojaRepository.findOne({ where: { id } });

        if (!procurarLoja) {
            throw new NotFoundException(`Erro! A Loja com o ID: ${id}, não foi encontrada.`);
        }

        return await this.lojaRepository.findOne({ where: { id } });
    }


    async findAll(): Promise<LojaDTO[]> {
        return await this.lojaRepository.find();
    }


    async criarLoja(loja: LojaDTO): Promise<LojaDTO> {
        return await this.lojaRepository.save(loja);
    }


    async atualizarLoja(id: number, loja: LojaDTO): Promise<void> {
        const procurarLoja = await this.lojaRepository.findOne({ where: { id } });

        if (!procurarLoja) {
            throw new NotFoundException(`Erro! A Loja com o ID: ${id}, não foi encontrada.`);
        }

        const { descricao } = loja;

        procurarLoja.descricao = descricao;

        await this.lojaRepository.save(procurarLoja);
    }


    async excluirLoja(id: number): Promise<string> {
        const procurarLoja = await this.lojaRepository.findOne({ where: { id } });

        if (!procurarLoja) {
            throw new NotFoundException(`Erro! A Loja com o ID: ${id}, não foi encontrada.`);
        }

        const produtoLojaDependencias = await this.produtoLojaRepository.find({
            where: {
                id: id
            }
        });

        await this.produtoLojaRepository.remove(produtoLojaDependencias);

        await this.lojaRepository.delete(id)

        return `A Loja com o ID: ${id} foi excluída com sucesso, incluindo as suas dependências, caso existam, na tabela ProdutoLoja.`;

    }
}
