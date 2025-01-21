import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDeclaracaoDto } from './dto/create-declaracao.dto';
import { UpdateDeclaracaoDto } from './dto/update-declaracao.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Declaracao } from './entities/declaracao.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeclaracaoService {
  constructor(
    @InjectRepository(Declaracao)
    private readonly declaracaoRepository: Repository<Declaracao>,
  ) {}

  async create(createDeclaracaoDto: CreateDeclaracaoDto): Promise<Declaracao> {
    const newDeclaracao = this.declaracaoRepository.create(createDeclaracaoDto);
    return await this.declaracaoRepository.save(newDeclaracao);
  }

  async findAll(): Promise<Declaracao[]> {

    return await this.declaracaoRepository.find({ relations: [ 'user' ]  });
  }

  async findOne(id: number): Promise<Declaracao> {
    const declaracao = await this.declaracaoRepository.findOne({where: { id }});
    if (!declaracao) {
      throw new BadRequestException({ message: 'Declaracao nao encontrada' });
    }
    return declaracao;
  }

  async update(id: number, updateDeclaracaoDto: UpdateDeclaracaoDto): Promise<Declaracao> {
    const declaracao = await this.findOne(id);
    if (!declaracao) {
      throw new BadRequestException({ message: 'declaracao nao encontrada' });
    }

    const updateDeclaracao = this.declaracaoRepository.merge(declaracao, updateDeclaracaoDto);
    return await this.declaracaoRepository.save(updateDeclaracao);
  }

  async remove(id: number): Promise<Declaracao> {
    const declaracao = await this.findOne(id);
    if (!declaracao) {
      throw new BadRequestException({ message: 'Declaracao not found' });
    }
    return await this.declaracaoRepository.remove(declaracao);
  }
}
