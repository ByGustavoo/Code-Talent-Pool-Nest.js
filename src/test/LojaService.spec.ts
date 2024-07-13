import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { LojaService } from '../Service/LojaService';
import { Loja } from '../Model/Entity/Loja';
import { ProdutoLoja } from '../Model/Entity/ProdutoLoja';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

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

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LojaService,
        { provide: getRepositoryToken(Loja), useFactory: mockLojaRepository },
        {
          provide: getRepositoryToken(ProdutoLoja),
          useFactory: mockProdutoLojaRepository,
        },
      ],
    }).compile();

    service = module.get<LojaService>(LojaService);
    lojaRepository = module.get<Repository<Loja>>(getRepositoryToken(Loja));
    produtoLojaRepository = module.get<Repository<ProdutoLoja>>(
      getRepositoryToken(ProdutoLoja),
    );
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

      await expect(service.findOne(id)).rejects.toThrow(NotFoundException);
    });
  });

  describe('findAll', () => {
    it('Deve retornar todas as Lojas.', async () => {
      const mockLojas = [{ id: 1, descricao: 'Loja Teste' }];
      lojaRepository.find.mockResolvedValue(mockLojas);

      const result = await service.findAll();

      expect(result).toEqual(mockLojas);
    });
  });

  describe('criarLoja', () => {
    it('Deve criar uma nova Loja.', async () => {
      const mockLojaDTO = { id: 1, descricao: 'Nova Loja' };
      lojaRepository.save.mockResolvedValue(mockLojaDTO);

      const result = await service.criarLoja(mockLojaDTO);

      expect(result).toEqual(mockLojaDTO);
    });
  });

  describe('atualizarLoja', () => {
    it('Deve atualizar uma Loja existente.', async () => {
      const id = 1;
      const mockLoja = { id, descricao: 'Loja Antiga' };
      const mockLojaDTO = { id, descricao: 'Loja Atualizada' };
      lojaRepository.findOne.mockResolvedValue(mockLoja);

      await service.atualizarLoja(id, mockLojaDTO);

      expect(lojaRepository.save).toHaveBeenCalledWith({
        ...mockLoja,
        descricao: mockLojaDTO.descricao,
      });
    });

    it('Deve lançar uma exceção quando a Loja não for encontrada.', async () => {
      const id = 1;
      const mockLojaDTO = { id, descricao: 'Loja Atualizada' };
      lojaRepository.findOne.mockResolvedValue(null);

      await expect(service.atualizarLoja(id, mockLojaDTO)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('excluirLoja', () => {
    it('Deve excluir uma Loja existente e suas dependências.', async () => {
      const id = 1;
      const mockLoja = { id, descricao: 'Loja Teste' };
      const mockDependencias = [{ id: 1, lojaId: id, produtoId: 1 }];

      lojaRepository.findOne.mockResolvedValue(mockLoja);
      produtoLojaRepository.find.mockResolvedValue(mockDependencias);

      const result = await service.excluirLoja(id);

      expect(produtoLojaRepository.remove).toHaveBeenCalledWith(
        mockDependencias,
      );
      expect(lojaRepository.delete).toHaveBeenCalledWith(id);
      expect(result).toEqual(
        `A Loja com o ID: ${id} foi excluída com sucesso, incluindo as suas dependências, caso existam, na tabela ProdutoLoja.`,
      );
    });

    it('Deve lançar uma exceção quando a Loja não for encontrada.', async () => {
      const id = 1;
      lojaRepository.findOne.mockResolvedValue(null);

      await expect(service.excluirLoja(id)).rejects.toThrow(NotFoundException);
    });
  });
});
