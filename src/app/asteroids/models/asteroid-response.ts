import { Asteroid } from './asteroid';

export interface AsteroidResponse {
  links: {
    next: string;
    prev: string;
    self: string;
  },
  element_count: number;
  near_earth_objects: { [ key: string ]: Asteroid[] }
}