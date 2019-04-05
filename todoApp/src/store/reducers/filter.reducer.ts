import { FilterActions } from './../actions/filter.actions';
import { Action } from './../interfaces';

const initialState = 'ALL';

export const filterReducer = (state: string = initialState, action: Action) => {
    switch(action.type) {
        case FilterActions.SET_FILTER:
            return action.payload;
        default:
            return state;
    }
}