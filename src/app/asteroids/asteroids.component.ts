import { Component, OnInit } from '@angular/core';
import { Asteroid } from './models/asteroid';
import { AsteroidsService } from './services/asteroids.service';

@Component({
  selector: 'app-asteroids',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.scss']
})
export class AsteroidsComponent implements OnInit {
  asteroids: Asteroid[];

  constructor(private asteroidsService: AsteroidsService) { }

  ngOnInit() {
    this.asteroidsService.getAsteroids()
      .subscribe(a => this.asteroids = a);
  }

}
