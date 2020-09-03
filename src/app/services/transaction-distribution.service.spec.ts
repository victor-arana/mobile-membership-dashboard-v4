import { TestBed } from '@angular/core/testing';

import { TransactionDistributionService } from './transaction-distribution.service';

describe('TransactionDistributionService', () => {
  let service: TransactionDistributionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionDistributionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
