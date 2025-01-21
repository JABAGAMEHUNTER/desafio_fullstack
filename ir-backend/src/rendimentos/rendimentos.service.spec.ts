import { Test, TestingModule } from '@nestjs/testing';
import { RendimentosService } from './rendimentos.service';

describe('RendimentosService', () => {
  let service: RendimentosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RendimentosService],
    }).compile();

    service = module.get<RendimentosService>(RendimentosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
