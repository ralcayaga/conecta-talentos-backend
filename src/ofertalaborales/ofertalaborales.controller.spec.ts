import { Test, TestingModule } from '@nestjs/testing';
import { OfertalaboralesController } from './ofertalaborales.controller';

describe('OfertalaboralesController', () => {
  let controller: OfertalaboralesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfertalaboralesController],
    }).compile();

    controller = module.get<OfertalaboralesController>(OfertalaboralesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
