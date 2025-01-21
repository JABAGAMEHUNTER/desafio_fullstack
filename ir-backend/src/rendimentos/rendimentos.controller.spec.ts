import { Test, TestingModule } from '@nestjs/testing';
import { RendimentosController } from './rendimentos.controller';
import { RendimentosService } from './rendimentos.service';

describe('RendimentosController', () => {
  let controller: RendimentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RendimentosController],
      providers: [RendimentosService],
    }).compile();

    controller = module.get<RendimentosController>(RendimentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
