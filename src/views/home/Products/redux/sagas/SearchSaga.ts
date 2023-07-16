import { takeLatest, put, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

export  function* rootSaga(): SagaIterator {
    yield takeLatest('type-search', fetchData);
}

function * fetchData(): SagaIterator  {
    
    const state = yield select();
    if (state.searchInputValue.length >= 4) {
        console.log('****** saga', state.searchInputValue)
        yield put({ type: 'DATA_RECEIVED', payload: { data: 'Dados recebidos' } });
    }

}