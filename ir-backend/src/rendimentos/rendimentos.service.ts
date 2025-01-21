import { BadRequestException, Injectable} from '@nestjs/common';
import { CreateRendimentoDto } from './dto/create-rendimento.dto';
import { UpdateRendimentoDto } from './dto/update-rendimento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rendimento } from './entities/rendimento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RendimentosService {
  constructor(
    @InjectRepository(Rendimento)
    private readonly rendimentoRepository: Repository<Rendimento>,
  ) {}

  async create(createRendimentoDto: CreateRendimentoDto): Promise<Rendimento> {
    /*const { id_usuario } = createRendimentoDto;

    const existingRendimento = await this.rendimentoRepository.findOne({
      where: { id_usuario },
    });

    if (existingRendimento) {
      throw new BadRequestException({ message: 'Rendimento ja cadastrado' });
    }   
    */
    const newRendimento = this.rendimentoRepository.create(createRendimentoDto);
    return await this.rendimentoRepository.save(newRendimento);
  }

  async findAll(): Promise<Rendimento[]> {
    return await this.rendimentoRepository.find({ relations: [ 'declaracao' ]  });
  }

  async findOne(id: number): Promise<Rendimento> {
    const rendimento = await this.rendimentoRepository.findOne({ where: { id } });
    if (!rendimento) {
      throw new BadRequestException({ message: 'Rendimento nao achado' });
    }
    return rendimento;
  }

  async update(id: number, updateRendimentoDto: UpdateRendimentoDto): Promise<Rendimento> {
    const rendimento = await this.findOne(id);
    if (!rendimento) {
      throw new BadRequestException({ message: 'Rendimento nao encontrado' });
    }
    
    const updateRendimento = this.rendimentoRepository.merge(rendimento, updateRendimentoDto);
    return await this.rendimentoRepository.save(updateRendimento);
  }

  async remove(id: number): Promise<Rendimento> {
    const rendimento = await this.findOne(id);
    if (!rendimento) {
      throw new BadRequestException({ message: 'Rendimento nao encontrado' });
    }
    return await this.rendimentoRepository.remove(rendimento);
  }
}
