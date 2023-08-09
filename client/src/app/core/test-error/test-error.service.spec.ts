import { TestBed } from '@angular/core/testing';

import { TestErrorService } from './test-error.service';

describe('TestErrorService', () => {
  let service: TestErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
