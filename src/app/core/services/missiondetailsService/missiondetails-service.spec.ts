import { TestBed } from '@angular/core/testing';

import { MissiondetailsService } from './missiondetails-service';

describe('MissiondetailsService', () => {
  let service: MissiondetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MissiondetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
