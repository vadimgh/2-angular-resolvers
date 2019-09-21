/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AsteroidsService } from './asteroids.service';

describe('Service: Asteroids', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsteroidsService]
    });
  });

  it('should ...', inject([AsteroidsService], (service: AsteroidsService) => {
    expect(service).toBeTruthy();
  }));
});
