import { Todo } from './../../models/interfaces';
import { AppState } from './../../../store/interfaces';
import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  todos: Todo[];
  currentFilter: string;
  visibleTodos: Todo[];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      console.log(state);
      
      this.todos = state.todos;
      this.currentFilter = state.currentFilter;
      switch(this.currentFilter) {
        case 'ALL':
          this.visibleTodos = this.todos.filter(todo => true);
          break;
        case 'DONE':
          this.visibleTodos = this.todos.filter(todo => todo.done);
          break;
        case 'PENDING':
          this.visibleTodos = this.todos.filter(todo => !todo.done);
          break;        
      }

    });
  }

}
