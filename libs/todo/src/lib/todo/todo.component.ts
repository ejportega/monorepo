import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export interface Todo {
  id: string;
  todo: string;
  completed: boolean;
}

@Component({
  selector: 'monorepo-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations: [
    trigger('addItem', [
      state(
        'void',
        style({
          transform: 'translateX(-100%)',
        })
      ),
      transition('void <=> *', animate('0.5s ease-in')),
    ]),
  ],
})
export class TodoComponent {
  @Input() todos: string[] = [];

  itemList: string[] = [];
  count = 0;

  addItem() {
    if (this.todos.length > this.count) {
      this.itemList.push(this.todos[this.count]);
      this.count++;
    }
  }

  removeItem() {
    if (this.count > 0) {
      this.itemList.pop();
      this.count--;
    }
  }
}
