import { TodoActions } from './../actions/todo.actions';
import { Action } from './../interfaces';
import { Todo } from './../../app/models/interfaces';

const initialState : Todo[] = [
    {
        label: 'Bring Milk',
        done: false
    },
    {
        label: 'Clean House',
        done: true
    }
]

export const todoReducer = (state: Todo[] = initialState, action: Action) => {

    switch(action.type) {
        case TodoActions.LOAD_TODOS:
            return action.payload;
        case TodoActions.ADD_TODO:
            return state.concat(action.payload);
        default:
            return state;
    }
    
}