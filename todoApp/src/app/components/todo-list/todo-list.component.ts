import { TodoActions } from './../../../store/actions/todo.actions';
import { AppState } from './../../../store/interfaces';
import { Store } from '@ngrx/store';
import { Todo } from './../../models/interfaces';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  toggle(todo) {
    this.store.dispatch({
      type: TodoActions.TOGGLE_TODO,
      payload: todo.id
    });
  }

  delete(todo) {
    this.store.dispatch({
      type: TodoActions.DELETE_TODO,
      payload: todo.id
    });
  }

}
