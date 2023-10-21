import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly http: HttpClient) {}

  title = 'app-2';

  todos$ = this.http.get('https://dummyjson.com/todos?limit=150').pipe(
    map((response: any) => {
      const todos = [];

      for (let i = 0; i < 10; i++) {
        todos.push(
          response.todos[Math.floor(Math.random() * response.todos.length)].todo
        );
      }

      return todos;
    })
  );

  events$ = this.http.get('https://dummyjson.com/todos?limit=150').pipe(
    map((response: any) => {
      const events = [];
      const bgColors = [
        'bg-amber-100',
        'bg-teal-100',
        'bg-indigo-100',
        'bg-lime-100',
      ];
      const timeList = [
        '08:00 - 09:00 AM',
        '10:00 - 11:00 AM',
        '01:00 - 02:00 PM',
        '03:00 - 04:00 PM',
        '05:00 - 07:00 PM',
      ];

      for (let i = 0; i < 5; i++) {
        events.push({
          time: timeList[i],
          action:
            response.todos[Math.floor(Math.random() * response.todos.length)]
              .todo,
          bgColor: bgColors[Math.floor(Math.random() * bgColors.length)],
        });
      }

      return events;
    })
  );

  showEvents = false;

  onTabChange(index: number): void {
      this.showEvents = index === 1;
  }
}
