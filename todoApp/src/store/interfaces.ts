import { Todo } from './../app/models/interfaces';

export interface AppState {
    todos: Todo[];
    currentFilter: string;
}

export interface Action {
    type: string;
    payload?: any;
}

