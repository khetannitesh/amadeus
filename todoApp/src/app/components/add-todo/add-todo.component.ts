import { Todo } from './../../models/interfaces';
import { TodoActions } from './../../../store/actions/todo.actions';
import { AppState } from './../../../store/interfaces';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addTodo(todoEl: HTMLInputElement) {
    let newTodo: Todo = {
      label: todoEl.value,
      done: false
    };
    this.store.dispatch({
      type: TodoActions.ADD_TODO,
      payload: newTodo
    });
    todoEl.value = '';
  }

}
