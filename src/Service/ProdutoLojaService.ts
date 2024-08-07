import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Messages } from 'src/messages/messages';
import { ProdutoLojaDTO } from 'src/model/dto/ProdutoLojaDTO';
import { Loja } from 'src/model/entities/Loja';
import { Produto } from 'src/model/entities/Produto';
import { ProdutoLoja } from 'src/model/entities/ProdutoLoja';
import { Repository } from 'typeorm';

@Injectable()
export class ProdutoLojaService {
  constructor(
    @InjectRepository(ProdutoLoja) private produtoLojaRepository: Repository<ProdutoLoja>,
    @InjectRepository(Produto) private produtoRepository: Repository<Produto>,
    @InjectRepository(Loja) private lojaRepository: Repository<Loja>,
    private readonly MESSAGES: Messages
  ) {}


  // Busca um ProdutoLoja pelo ID
  async findOne(id: number): Promise<ProdutoLojaDTO> {
    const findProductStore = await this.produtoLojaRepository.findOne({ where: { id } });

    if (!findProductStore) {
      throw this.MESSAGES.PRODUCT_STORE_NOT_FOUND(id);
    }

    return await this.produtoLojaRepository.findOne({ where: { id } });
  }


  // Busca todos os ProdutosLojas
  async findAll(): Promise<ProdutoLojaDTO[]> {
    return await this.produtoLojaRepository.find();
  }


  // Cria um ProdutoLoja
  async createProductStore(produtoLoja: ProdutoLojaDTO): Promise<ProdutoLojaDTO> {
    const productStoreSaved = await this.produtoLojaRepository.save(produtoLoja);

    const findProduct = await this.produtoRepository.findOne({where: { id: produtoLoja.produto }})
    const findStore = await this.lojaRepository.findOne({where: { id: produtoLoja.loja }})

    if (!findProduct) {
      throw this.MESSAGES.PRODUCT_NOT_FOUND(produtoLoja.produto);
    }

    else if (!findStore) {
      throw this.MESSAGES.STORE_NOT_FOUND(produtoLoja.loja);
    }

    else {
      throw this.MESSAGES.PRODUCT_STORE_CREATED_SUCCESS(produtoLoja.id);
    } 
  }


  // Atualiza um ProdutoLoja
  async updateProductStore(id: number, produtoLoja: ProdutoLojaDTO) {
    const findProductStore = await this.produtoLojaRepository.findOne({ where: { id } });

    if (!findProductStore) {
      throw this.MESSAGES.PRODUCT_STORE_NOT_FOUND(id);
    }

    const { loja, produto, precoVenda } = produtoLoja;
    findProductStore.loja = loja;
    findProductStore.produto = produto;
    findProductStore.precoVenda = precoVenda;

    await this.produtoLojaRepository.save(findProductStore);

    const MESSAGES = this.MESSAGES.PRODUCT_STORE_UPDATED_SUCCESS(findProductStore.id);

    return {
      status: MESSAGES.getStatus(),
      message: MESSAGES.message
    };
  }


  // Deleta um ProdutoLoja
  async deleteProductStore(id: number) {
    const findProductStore = await this.produtoLojaRepository.findOne({ where: { id } });

    if (!findProductStore) {
      throw this.MESSAGES.PRODUCT_STORE_NOT_FOUND(id);
    }

    await this.produtoLojaRepository.delete({ id });

    const MESSAGES = this.MESSAGES.PRODUCT_STORE_DELETED_SUCCESS(findProductStore.id);

    return {
      status: MESSAGES.getStatus(),
      message: MESSAGES.message
    };
  }
}