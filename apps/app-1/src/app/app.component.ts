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

  title = 'app-1';

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
}
