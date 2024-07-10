import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoLojaDTO } from 'src/Model/DTO/ProdutoLojaDTO';
import { ProdutoLoja } from 'src/Model/Entity/ProdutoLoja';
import { Repository } from 'typeorm';


@Injectable()
export class ProdutoLojaService {
    constructor(@InjectRepository(ProdutoLoja) private produtoLojaRepository: Repository<ProdutoLoja>
    ) { }

}
