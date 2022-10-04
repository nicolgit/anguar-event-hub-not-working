import { TestBed } from '@angular/core/testing';

import { IAmTheProblemService } from './i-am-the-problem.service';

describe('IAmTheProblemService', () => {
  let service: IAmTheProblemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IAmTheProblemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
