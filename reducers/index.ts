import AddressReducer from './AddressReducer';
import ChineseDataListReducer from './ChineseDataListReducer';
import DateDataListReducer from './DateDataListReducer';
import DessertDataListReducer from './DessertDataListReducer';
import JapaneseDataListReducer from './JapaneseDataListReducer';
import KoreanDataListReducer from './KoreanDataListReducer';
import LocationReducer from './LocationReducer';
import MatzipDataListReducer from './MatzipDataListReducer';
import MatzipDetailDataReducer from './MatzipDetailDataReducer';
import NearByDataListReducer from './NearByDataListReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  AddressReducer,
  MatzipDataListReducer,
  LocationReducer,
  MatzipDetailDataReducer,
  ChineseDataListReducer,
  DateDataListReducer,
  DessertDataListReducer,
  JapaneseDataListReducer,
  KoreanDataListReducer,
  NearByDataListReducer,
});

export default rootReducer;
