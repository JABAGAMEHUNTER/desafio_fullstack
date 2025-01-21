import { Test, TestingModule } from '@nestjs/testing';
import { DeclaracaoController } from './declaracao.controller';
import { DeclaracaoService } from './declaracao.service';

describe('DeclaracaoController', () => {
  let controller: DeclaracaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeclaracaoController],
      providers: [DeclaracaoService],
    }).compile();

    controller = module.get<DeclaracaoController>(DeclaracaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
