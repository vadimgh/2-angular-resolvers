import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { AsteroidsComponent } from './asteroids.component';
import { AsteroidsService } from './services/asteroids.service';

const routes: Routes = [
  {
    path: '',
    component: AsteroidsComponent, data: { animation: 'fadeAsteroids' }
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
  providers: [AsteroidsService]
})
export class AsteroidsModule { }
