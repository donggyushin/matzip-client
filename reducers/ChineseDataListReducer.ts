import {ChineseDataListDispatchType} from '../actions/ChineseDataListActionTypes';
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

const ChineseDataListReducer = (
  state = initialState,
  action: ChineseDataListDispatchType,
): InitialState => {
  switch (action.type) {
    case 'CHINESE_FETCHING_DATA':
      return fetchingData(state, action);
    case 'CHINESE_ERROR':
      return error(state, action);
    case 'CHINESE_LOADING':
      return loading(state, action);
    default:
      return state;
  }
};

const error = (
  state: InitialState,
  action: ChineseDataListDispatchType,
): InitialState => {
  if (action.type !== 'CHINESE_ERROR') return state;
  const error = action.payload;
  return {
    ...state,
    matzipList: [],
    loading: false,
    error,
  };
};

const loading = (
  state: InitialState,
  action: ChineseDataListDispatchType,
): InitialState => {
  if (action.type !== 'CHINESE_LOADING') return state;
  return {
    ...state,
    matzipList: [],
    loading: true,
    error: '',
  };
};

const fetchingData = (
  state: InitialState,
  action: ChineseDataListDispatchType,
): InitialState => {
  if (action.type !== 'CHINESE_FETCHING_DATA') return state;
  const matzipList = action.payload;
  return {
    ...state,
    matzipList,
    loading: false,
    error: '',
  };
};

export default ChineseDataListReducer;
