import { Test, TestingModule } from '@nestjs/testing';
import { OfertalaboralesService } from './ofertalaborales.service';

describe('OfertalaboralesService', () => {
  let service: OfertalaboralesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfertalaboralesService],
    }).compile();

    service = module.get<OfertalaboralesService>(OfertalaboralesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
