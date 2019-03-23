import { TestBed } from '@angular/core/testing';

import { FakeapiService } from './fakeapi.service';

describe('FakeapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakeapiService = TestBed.get(FakeapiService);
    expect(service).toBeTruthy();
  });
});
