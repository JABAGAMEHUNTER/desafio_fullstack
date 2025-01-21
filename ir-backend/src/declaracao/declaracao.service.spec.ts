import { Test, TestingModule } from '@nestjs/testing';
import { DeclaracaoService } from './declaracao.service';

describe('DeclaracaoService', () => {
  let service: DeclaracaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeclaracaoService],
    }).compile();

    service = module.get<DeclaracaoService>(DeclaracaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
