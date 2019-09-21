import {
  trigger,
  transition,
  style,
  query,
  animate,
} from '@angular/animations';

export const fade =
  trigger('routeAnimations', [
    transition('fadeHome <=> fadeAsteroids', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          opacity: 0,
          transform: 'scale(0) translateY(80%)',
        }),
      ]),
      query(':enter', [
        animate('500ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)', position: 'relative' })),
      ])
    ]),
  ]);