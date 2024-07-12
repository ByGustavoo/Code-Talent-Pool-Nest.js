import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoLojaDTO } from 'src/Model/DTO/ProdutoLojaDTO';
import { ProdutoLoja } from 'src/Model/Entity/ProdutoLoja';
import { Repository } from 'typeorm';


@Injectable()
export class ProdutoLojaService {
    constructor(@InjectRepository(ProdutoLoja) private produtoLojaRepository: Repository<ProdutoLoja>
    ) { }


    async findOne(id: number): Promise<ProdutoLojaDTO> {
        const procurarProdutoLoja = await this.produtoLojaRepository.findOne({ where: { id } });

        if (!procurarProdutoLoja) {
            throw new NotFoundException(`Erro! O Produto Loja com o ID: ${id}, não foi encontrado.`);
        }

        return await this.produtoLojaRepository.findOne({ where: { id } });
    }


    async findAll(): Promise<ProdutoLojaDTO[]> {
        return await this.produtoLojaRepository.find();
    }


    async criarProdutoLoja(produtoLoja: ProdutoLojaDTO): Promise<ProdutoLojaDTO> {
        return await this.produtoLojaRepository.save(produtoLoja);
    }


    async atualizarProdutoLoja(id: number, produtoLoja: ProdutoLojaDTO): Promise<void> {
        const procurarProdutoLoja = await this.produtoLojaRepository.findOne({ where: { id } });

        if (!procurarProdutoLoja) {
            throw new NotFoundException(`Erro! O Produto Loja com o ID: ${id}, não foi encontrado.`);
        }

        const { loja, produto, precoVenda } = produtoLoja;

        procurarProdutoLoja.loja = loja;
        procurarProdutoLoja.produto = produto;
        procurarProdutoLoja.precoVenda = precoVenda;

        await this.produtoLojaRepository.save(procurarProdutoLoja);
    }


    async excluirProdutoLoja(id: number): Promise<string> {
        const procurarProdutoLoja = await this.produtoLojaRepository.findOne({ where: { id } });

        if (!procurarProdutoLoja) {
            throw new NotFoundException(`Erro! O Produto Loja com o ID: ${id}, não foi encontrado.`);
        }

        await this.produtoLojaRepository.delete({ id });
        return `O Produto Loja com o ID: ${id}, foi excluído com sucesso.`;
    }
}
