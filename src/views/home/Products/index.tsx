
import {
    Text,
    View,
  } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SearchInput from './SearchInput';
import reducer from './redux/reducers/typeSearch';

function Products() {
  const dispatch = useDispatch();
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