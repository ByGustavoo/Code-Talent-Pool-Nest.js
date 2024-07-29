import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionsMessages } from 'src/messages/exceptions/ExceptionsMessages';
import { SucessMessages } from 'src/messages/success/SuccessMessages';
import { ProdutoDTO } from 'src/model/dto/ProdutoDTO';
import { Produto } from 'src/model/entities/Produto';
import { ProdutoLoja } from 'src/model/entities/ProdutoLoja';
import { Repository } from 'typeorm';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto) private produtoRepository: Repository<Produto>,
    @InjectRepository(ProdutoLoja) private produtoLojaRepository: Repository<ProdutoLoja>,
  ) {}


  // Busca um Produto pelo ID
  async findOne(id: number): Promise<ProdutoDTO> {
    const findProduct = await this.produtoRepository.findOne({ where: { id } });

    if (!findProduct) {
      throw ExceptionsMessages.PRODUCT_NOT_FOUND(id);
    }

    return await this.produtoRepository.findOne({ where: { id } });
  }


  // Busca todos os Produtos
  async findAll(): Promise<ProdutoDTO[]> {
    return await this.produtoRepository.find();
  }


  // Cria um Produto
  async createProduct(produto: ProdutoDTO): Promise<ProdutoDTO> {
    const productSaved = this.produtoRepository.save(produto);

    if (productSaved) {
      throw SucessMessages.PRODUCT_CREATED_SUCCESS(produto.descricao);
    }

    return productSaved;
  }


  // Atualiza um Produto
  async updateProduct(id: number, produto: ProdutoDTO) {
    const findProduct = await this.produtoRepository.findOne({ where: { id } });

    if (!findProduct) {
      throw ExceptionsMessages.PRODUCT_NOT_FOUND(id);
    }

    const { descricao, custo, imagem } = produto;
    findProduct.descricao = descricao;
    findProduct.custo = custo;
    findProduct.imagem = imagem;

    await this.produtoRepository.save(findProduct);

    const successMessages = SucessMessages.PRODUCT_UPDATED_SUCCESS(descricao);

    return {
      status: successMessages.getStatus(),
      message: successMessages.message
    };
  }


  // Deleta um Produto
  async deleteProduct(id: number) {
    const findProduct = await this.produtoRepository.findOne({ where: { id } });

    if (!findProduct) {
      throw ExceptionsMessages.PRODUCT_NOT_FOUND(id);
    }

    const productStoreDependencies = await this.produtoLojaRepository.find({ where: { id: id }});

    await this.produtoLojaRepository.remove(productStoreDependencies);

    await this.produtoRepository.delete(id);

    const successMessages = SucessMessages.PRODUCT_DELETED_SUCCESS(id);

    return {
      status: successMessages.getStatus(),
      message: successMessages.message
    };
  }
}