import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LojaDTO } from 'src/model/dto/LojaDTO';
import { Loja } from '../model/entities/Loja';
import { ProdutoLoja } from '../model/entities/ProdutoLoja';
import { Repository } from 'typeorm';
import { ExceptionsMessages } from 'src/messages/exceptions/ExceptionsMessages';
import { SucessMessages } from 'src/messages/success/SuccessMessages';

@Injectable()
export class LojaService {
  constructor(
    @InjectRepository(Loja) private lojaRepository: Repository<Loja>,
    @InjectRepository(ProdutoLoja) private produtoLojaRepository: Repository<ProdutoLoja>,
  ) {}


  // Busca uma Loja pelo ID
  async findOne(id: number): Promise<LojaDTO> {
    const findStore = await this.lojaRepository.findOne({ where: { id } });

    if (!findStore) {
      throw ExceptionsMessages.STORE_NOT_FOUND(id);
    }

    return await this.lojaRepository.findOne({ where: { id } });
  }


  // Busca todas as Lojas
  async findAll(): Promise<LojaDTO[]> {
    return await this.lojaRepository.find();
  }


  // Cria uma Loja
  async createStore(loja: LojaDTO): Promise<LojaDTO> {
    const storeSaved = this.lojaRepository.save(loja);

    if (storeSaved) {
      throw SucessMessages.STORE_CREATED_SUCCESS(loja.descricao);
    }

    return storeSaved;
  }


  // Atualiza uma Loja
  async updateStore(id: number, loja: LojaDTO) {
    const findStore = await this.lojaRepository.findOne({ where: { id } });

    if (!findStore) {
      throw ExceptionsMessages.STORE_NOT_FOUND(id);
    }

    const { descricao } = loja;
    findStore.descricao = descricao;

    await this.lojaRepository.save(findStore);

    const successMessages = SucessMessages.STORE_UPDATED_SUCCESS(descricao);

    return {
      status: successMessages.getStatus(),
      message: successMessages.message,
    };
  }


  // Deleta uma Loja
  async deleteStore(id: number) {
    const findStore = await this.lojaRepository.findOne({ where: { id } });

    if (!findStore) {
      throw ExceptionsMessages.STORE_NOT_FOUND(id);
    }

    const productStoreDependencies = await this.produtoLojaRepository.find({ where: { id: id } });

    await this.produtoLojaRepository.remove(productStoreDependencies);

    await this.lojaRepository.delete(id);

    const successMessages = SucessMessages.STORE_DELETED_SUCCESS(id);

    return {
      status: successMessages.getStatus(),
      message: successMessages.message,
    };
  }
}
