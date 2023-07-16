import {  AnyAction,   } from 'redux';

function reducer(state = {}, action: AnyAction) {
    
    // console.log('entrei', action);

    if (action.type === 'type-search') {
        // console.log('entrei 2', action);
        return {
            ...state,
            searchInputValue: action.payload,
        }
    }

    return state;
}

export default reducer;