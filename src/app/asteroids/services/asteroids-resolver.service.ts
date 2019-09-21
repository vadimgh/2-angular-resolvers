import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Asteroid } from '../models/asteroid';
import { AsteroidsService } from './asteroids.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsteroidsResolverService implements Resolve<Asteroid[]> {

constructor(private asteroidsService: AsteroidsService) { }

  resolve(): Observable<Asteroid[]> {
    return this.asteroidsService.getAsteroids();
  }
}
