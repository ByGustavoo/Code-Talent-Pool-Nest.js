import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProdutoDTO } from "src/Model/DTO/ProdutoDTO";
import { Produto } from "src/Model/Entity/Produto";
import { Repository } from "typeorm";

@Injectable()
export class ProdutoService {
    constructor(@InjectRepository(Produto) private produtoRepository: Repository<Produto>
    ) { }


    async findAll(): Promise<ProdutoDTO[]> {
        return await this.produtoRepository.find();
    }


    async criarProduto(produto: ProdutoDTO): Promise<ProdutoDTO> {
        return await this.produtoRepository.save(produto);
    }


    async atualizarProduto(id: number, produto: ProdutoDTO): Promise<void> {
        const procurarProduto = await this.produtoRepository.findOne({ where: { id } });

        if (!procurarProduto) {
            throw new NotFoundException(`Erro! O Produto com o ID: ${id}, não foi encontrado.`);
        }

        const { descricao, custo, imagem } = produto;

        procurarProduto.descricao = descricao;
        procurarProduto.custo = custo;
        procurarProduto.imagem = imagem;

        await this.produtoRepository.save(procurarProduto);
    }


    async excluirProduto(id: number): Promise<string> {
        const produtosLojaRelacionados = await this.produtoRepository.find({
            where: {
                id: id
            }
        });

        await this.produtoRepository.remove(produtosLojaRelacionados);

        await this.produtoRepository.delete(id);

        return `O Produto com o ID: ${id}, foi excluído com sucesso.`;
    }

}