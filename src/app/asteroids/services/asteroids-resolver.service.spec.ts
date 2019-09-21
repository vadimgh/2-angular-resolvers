/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AsteroidsResolverService } from './asteroids-resolver.service';

describe('Service: AsteroidsResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsteroidsResolverService]
    });
  });

  it('should ...', inject([AsteroidsResolverService], (service: AsteroidsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
