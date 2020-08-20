import AddressReducer from './AddressReducer'
import LocationReducer from './LocationReducer'
import MatzipDataListReducer from './MatzipDataListReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  AddressReducer,
  MatzipDataListReducer,
  LocationReducer
})

export default rootReducer