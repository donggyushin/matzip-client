import AddressReducer from './AddressReducer';
import ChineseDataListReducer from './ChineseDataListReducer';
import DateDataListReducer from './DateDataListReducer';
import DessertDataListReducer from './DessertDataListReducer';
import ErrorReducer from './ErrorReducer'
import JapaneseDataListReducer from './JapaneseDataListReducer';
import KoreanDataListReducer from './KoreanDataListReducer';
import LocationReducer from './LocationReducer';
import MatzipDetailDataReducer from './MatzipDetailDataReducer';
import NearByDataListReducer from './NearByDataListReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  AddressReducer,
  LocationReducer,
  MatzipDetailDataReducer,
  ChineseDataListReducer,
  DateDataListReducer,
  DessertDataListReducer,
  JapaneseDataListReducer,
  KoreanDataListReducer,
  NearByDataListReducer,
  ErrorReducer
});

export default rootReducer;
