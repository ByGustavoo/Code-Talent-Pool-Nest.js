import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LojaDTO } from "src/Model/DTO/LojaDTO";
import { Loja } from "src/Model/Entity/Loja";
import { Repository } from "typeorm";

@Injectable()
export class LojaService {
    constructor(@InjectRepository(Loja) private lojaRepository: Repository<Loja>
    ) { }


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
        await this.lojaRepository.delete({ id });
        return `A Loja com o ID: ${id}, foi excluída com sucesso.`;
    }
}
