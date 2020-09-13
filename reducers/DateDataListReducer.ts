import {DateDataListDispatchType} from '../actions/DateDataListActionTypes';
import {MatzipDataType} from '../actions/MatzipDataListActionTypes';

interface InitialState {
  matzipList: MatzipDataType[];
  loading: boolean;
  error: string;
}

const initialState: InitialState = {
  matzipList: [],
  loading: true,
  error: '',
};

const DateDataListReducer = (
  state = initialState,
  action: DateDataListDispatchType,
): InitialState => {
  switch (action.type) {
    case 'DATE_FETCHING_DATA':
      return fetchingData(state, action);
    case 'DATE_ERROR':
      return error(state, action);
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
    error: '',
    loading: true,
    matzipList: [],
  };
};

const error = (
  state: InitialState,
  action: DateDataListDispatchType,
): InitialState => {
  if (action.type !== 'DATE_ERROR') return state;
  const error = action.payload;
  return {
    ...state,
    error,
    matzipList: [],
    loading: false,
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
    error: '',
    matzipList,
  };
};

export default DateDataListReducer;
