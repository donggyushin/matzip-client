import { DateDataListDispatchType } from '../actions/DateDataListActionTypes';
import { MatzipDataType } from '../types/Types';

interface InitialState {
  matzipList: MatzipDataType[];
  loading: boolean;

}

const initialState: InitialState = {
  matzipList: [],
  loading: false,

};

const DateDataListReducer = (
  state = initialState,
  action: DateDataListDispatchType,
): InitialState => {
  switch (action.type) {
    case 'DATE_FETCHING_DATA':
      return fetchingData(state, action);
    case 'DATE_LOADING':
      return loading(state, action);
    default:
      return state;
  }
};

const loading = (
  state: InitialState,
  action: DateDataListDispatchType,
): InitialState => {
  if (action.type !== 'DATE_LOADING') return state;
  return {
    ...state,

    loading: true,
    matzipList: [],
  };
};



const fetchingData = (
  state: InitialState,
  action: DateDataListDispatchType,
): InitialState => {
  if (action.type !== 'DATE_FETCHING_DATA') return state;
  const matzipList = action.payload;
  return {
    ...state,
    loading: false,

    matzipList,
  };
};

export default DateDataListReducer;
