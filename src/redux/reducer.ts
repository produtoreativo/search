import {  AnyAction,   } from 'redux';

interface RootState {

}

function reducer(state = {
    count: 15
}, action: AnyAction) {

    console.log('Reducer', action);

    if( action.meta && 
        action.meta.reducer) {
            return action.meta.reducer(state, action);
    }

    return state;
}

export default reducer;