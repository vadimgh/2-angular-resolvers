import { Component, OnInit } from '@angular/core';
import { Asteroid } from './models/asteroid';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asteroids',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.scss']
})
export class AsteroidsComponent implements OnInit {
  asteroids: Asteroid[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.asteroids = this.route.snapshot.data['asteroids'];
  }

}
