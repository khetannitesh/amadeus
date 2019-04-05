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
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => this.todos = state.todos)
  }

}
