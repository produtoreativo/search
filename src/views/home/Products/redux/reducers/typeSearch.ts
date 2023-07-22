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

    // if (action.type === 'clear_product_module') {
    //     const newState = delete state.searchInputValue;
    //     return newState
    // }

    return state;
}

export default reducer;