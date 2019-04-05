import { filterReducer } from './../store/reducers/filter.reducer';
import { todoReducer } from './../store/reducers/todo.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TodoListComponent,
    AddTodoComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      todos: todoReducer,
      currentFilter: filterReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
