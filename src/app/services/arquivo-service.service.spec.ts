import { TestBed } from '@angular/core/testing';

import { ArquivoServiceService } from './arquivo-service.service';

describe('ArquivoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArquivoServiceService = TestBed.get(ArquivoServiceService);
    expect(service).toBeTruthy();
  });
});
