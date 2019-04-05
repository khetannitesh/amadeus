import { Todo } from './../app/models/interfaces';

export interface AppState {
    todos: Todo[];
}

export interface Action {
    type: string;
    payload?: any;
}

