import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { AsteroidsComponent } from './asteroids.component';
import { AsteroidsService } from './services/asteroids.service';
import { AsteroidsResolverService } from './services/asteroids-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: AsteroidsComponent, data: { animation: 'fadeAsteroids' },
    resolve: {
      asteroids: AsteroidsResolverService
    }
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatDividerModule
  ],
  declarations: [AsteroidsComponent],
  providers: [AsteroidsService, AsteroidsResolverService]
})
export class AsteroidsModule { }
