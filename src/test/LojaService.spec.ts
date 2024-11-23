import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { LojaService } from '../Service/LojaService';
import { Loja } from '../model/entities/Loja';
import { ProdutoLoja } from '../model/entities/ProdutoLoja';
import { Repository } from 'typeorm';
import { Messages } from '../messages/Messages';

const mockLojaRepository = () => ({
  findOne: jest.fn(),
  find: jest.fn(),
  save: jest.fn(),
  delete: jest.fn(),
});

const mockProdutoLojaRepository = () => ({
  find: jest.fn(),
  remove: jest.fn(),
});

describe('LojaService', () => {
  let service: LojaService;
  let lojaRepository;
  let produtoLojaRepository;
  let messages: Messages;  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LojaService,
        { provide: getRepositoryToken(Loja), useFactory: mockLojaRepository },
        {
          provide: getRepositoryToken(ProdutoLoja),
          useFactory: mockProdutoLojaRepository,
        },
        Messages,
      ],
    }).compile();

    service = module.get<LojaService>(LojaService);
    lojaRepository = module.get<Repository<Loja>>(getRepositoryToken(Loja));
    produtoLojaRepository = module.get<Repository<ProdutoLoja>>(
      getRepositoryToken(ProdutoLoja)
    );
    messages = module.get<Messages>(Messages); 
  });

  describe('findOne', () => {
    it('Deve retornar uma Loja quando ela for encontrada.', async () => {
      const id = 1;
      const mockLoja = { id, descricao: 'Loja Teste' };

      lojaRepository.findOne.mockResolvedValue(mockLoja);

      const result = await service.findOne(id);

      expect(result).toEqual(mockLoja);
    });

    it('Deve lançar uma exceção quando a Loja não for encontrada.', async () => {
      const id = 1;
      lojaRepository.findOne.mockResolvedValue(null);

      const message = messages.STORE_NOT_FOUND(id);

      await expect(service.findOne(id)).rejects.toThrow(message);
    });
  });

  describe('updateStore', () => {
    it('Deve atualizar uma Loja existente.', async () => {
      const id = 1;
      const mockLoja = { id, descricao: 'Loja Antiga' };
      const mockLojaDTO = { id, descricao: 'Loja Atualizada' };

      lojaRepository.findOne.mockResolvedValue(mockLoja);

      const result = await service.updateStore(id, mockLojaDTO);

      expect(lojaRepository.save).toHaveBeenCalledWith({
        ...mockLoja,
        descricao: mockLojaDTO.descricao,
      });
      expect(result).toEqual({
        status: 200,
        message: `Sucesso! A Loja ${mockLojaDTO.descricao}, foi atualizada com sucesso!`,
      });
    });

    it('Deve lançar uma exceção quando a Loja não for encontrada.', async () => {
      const id = 1;
      const mockLojaDTO = { id, descricao: 'Loja Atualizada' };
      
      lojaRepository.findOne.mockResolvedValue(null);

      const message = messages.STORE_NOT_FOUND(id);

      await expect(service.updateStore(id, mockLojaDTO)).rejects.toThrow(message);
    });
});


  describe('deleteStore', () => {
    it('Deve excluir uma Loja existente e suas dependências.', async () => {
      const id = 1;
      const mockLoja = { id, descricao: 'Loja Teste' };
      const mockDependencias = [{ id: 1, lojaId: id, produtoId: 1 }];

      lojaRepository.findOne.mockResolvedValue(mockLoja);
      produtoLojaRepository.find.mockResolvedValue(mockDependencias);

      const result = await service.deleteStore(id);

      expect(produtoLojaRepository.remove).toHaveBeenCalledWith(mockDependencias);
      expect(lojaRepository.delete).toHaveBeenCalledWith(id);
      expect(result).toEqual({
        status: 200,
        message: `Sucesso! A Loja com o ID: ${id}, foi excluída com sucesso! Incluindo as suas dependências, caso existam, na tabela ProdutoLoja.`,
      });
    });

    it('Deve lançar uma exceção quando a Loja não for encontrada.', async () => {
      const id = 1;
      lojaRepository.findOne.mockResolvedValue(null);

      const message = messages.STORE_NOT_FOUND(id);

      await expect(service.deleteStore(id)).rejects.toThrow(message);
    });
  });
});