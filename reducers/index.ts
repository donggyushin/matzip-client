import AddressReducer from './AddressReducer';
import LocationReducer from './LocationReducer';
import MatzipDataListReducer from './MatzipDataListReducer';
import MatzipDetailDataReducer from './MatzipDetailDataReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  AddressReducer,
  MatzipDataListReducer,
  LocationReducer,
  MatzipDetailDataReducer,
});

export default rootReducer;
