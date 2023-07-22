
import {
    Text,
    View,
  } from 'react-native';
import { useDispatch, useSelector, useStore } from 'react-redux';
import SearchInput from './SearchInput';
import reducer from './redux/reducers/typeSearch';
import CustomStore from '../../../redux/CustomStore';
import { useEffect, useState } from 'react';
import { rootSaga } from './redux/sagas/SearchSaga';

function Products() {
  const dispatch = useDispatch();
  const store = useStore() as CustomStore;

  useEffect(function registerSaga() {
    const task = store.run(rootSaga);
    return () => {
      if (task) {
        task.cancel();
        // Limpar propriedades que somente o modulo utiliza
        // dispatch({ type: 'clear_product_module'})
      }
    }
  }, []);
  
  const count = useSelector((state: any) => (state.count) );
  const searchInputValue = useSelector((state: any) => (state.searchInputValue) );
  const onChangeText = (payload: any) => dispatch({ 
    type: 'type-search',
    payload,
    meta: {
      reducer,
    }
  });
  return (
      <View>
        <SearchInput 
          value={searchInputValue} 
          onChangeText={onChangeText}         
        />
        <Text>Home Screen {count}</Text>
        <Text>Valor do input {searchInputValue}</Text>
      </View>
  )

}
export default Products;