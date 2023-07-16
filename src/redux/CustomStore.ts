import { 
    applyMiddleware, 
    legacy_createStore,
    Store, 
    Observable, 
    Reducer, 
    Action 
} from 'redux';

import { Saga, SagaMiddleware, Task } from 'redux-saga'

interface StoreWithSagas {
    run: any
}
  
export default class CustomStore implements Store<any, Action>, StoreWithSagas {
    private store: Store<any, Action>;
    private sagaMiddleware: SagaMiddleware;
  
    constructor(reducer: Reducer, sagaMiddleware: SagaMiddleware) {
      this.store = legacy_createStore(reducer, applyMiddleware(sagaMiddleware));
      this.sagaMiddleware = sagaMiddleware;
    }
  
    [Symbol.observable](): Observable<any> {
      return this.store[Symbol.observable]();
    }
  
    getState = (): any => {
      return this.store.getState();
    }
  
    dispatch = (action: Action): any => {
      this.store.dispatch(action);
    }
  
    subscribe = (listener: () => void): () => void => {
      return this.store.subscribe(listener);
    }
  
    replaceReducer = (nextReducer: (state: any, action: Action) => any): void  => {
      this.store.replaceReducer(nextReducer);
    }
  
    run = (saga: Saga): Task<any> => {
      return this.sagaMiddleware.run(saga);
    }
  }