import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input } from '@angular/core';

interface Event {
  time: string;
  action: string;
  bgColor: string;
}

@Component({
  selector: 'monorepo-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        group([
          query('.item:nth-child(odd)', [
            style({ opacity: 0, transform: 'translateX(-250px)' }),
            animate(1000, style({ opacity: 1, transform: 'translateX(0)' })),
          ]),
          query('.item:nth-child(even)', [
            style({ opacity: 0, transform: 'translateX(250px)' }),
            animate(1000, style({ opacity: 1, transform: 'translateX(0)' })),
          ]),
        ]),
      ]),
      transition(':leave', [
        group([
          query('.item:nth-child(odd)', [
            animate(
              1000,
              style({ opacity: 0, transform: 'translateX(-250px)' })
            ),
          ]),
          query('.item:nth-child(even)', [
            animate(
              1000,
              style({ opacity: 0, transform: 'translateX(250px)' })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class EventsComponent {
  // private _events: Event[] = [];
  
  // @Input() set events(events: Event[]) {
  //   this._events = events;
  // }

  // get events(): Event[] {
  //   return this._events;
  // }

  @Input() events: Event[] = [];
  @Input() showEvents = false;

  toggleFlag = false;
}
