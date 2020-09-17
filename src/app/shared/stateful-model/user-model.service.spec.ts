import { TestBed } from '@angular/core/testing';

import { UserModelService } from './user-model.service';

describe('UserModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserModelService = TestBed.get(UserModelService);
    expect(service).toBeTruthy();
  });
});
