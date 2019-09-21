import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AsteroidResponse } from '../models/asteroid-response';
import { Asteroid } from '../models/asteroid';

@Injectable({
  providedIn: 'root'
})
export class AsteroidsService {
  api = environment.api;

  constructor(private http: HttpClient) { }

  getAsteroids(): Observable<Asteroid[]> {
    return this.http.get<AsteroidResponse>(`${this.api}/assets/data/asteroids.json`)
      .pipe(
        map(res => {
          [[1, 2], [2, 3]].flat();
          return Object.keys(res.near_earth_objects)
            .map(key => res.near_earth_objects[key]).flat();
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error}`)
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
