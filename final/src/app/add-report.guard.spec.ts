import { TestBed } from '@angular/core/testing';

import { AddReportGuard } from './add-report.guard';

describe('AddReportGuard', () => {
  let guard: AddReportGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AddReportGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
