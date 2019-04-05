import { TodoActions } from './../actions/todo.actions';
import { Action } from './../interfaces';
import { Todo } from './../../app/models/interfaces';

const initialState : Todo[] = [
    {
        id: 1,
        label: 'Bring Milk',
        done: false
    },
    {
        id: 2,
        label: 'Clean House',
        done: true
    }
]

let lastId = 2;
const nextId = () => {
    lastId++;
    return lastId;
}

export const todoReducer = (state: Todo[] = initialState, action: Action) => {

    switch(action.type) {
        case TodoActions.LOAD_TODOS:
            return action.payload;
        case TodoActions.ADD_TODO:
            let data = Object.assign({}, action.payload, {id: nextId()})
            return state.concat(data);
        case TodoActions.TOGGLE_TODO:
            return state.map(todo => todo.id == action.payload ? Object.assign({}, todo, {done: !todo.done}) : todo);
        case TodoActions.DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
    
}