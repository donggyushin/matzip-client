import {DessertDataListDispatchType} from '../actions/DessertDataListActionTypes';
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

const DessertDataListReducer = (
  state = initialState,
  action: DessertDataListDispatchType,
): InitialState => {
  switch (action.type) {
    case 'DESSERT_LOADING':
      return loading(state, action);
    case 'DESSERT_ERROR':
      return error(state, action);
    case 'DESSERT_FETCHING_DATA':
      return fetchingData(state, action);
    default:
      return state;
  }
};

const fetchingData = (
  state: InitialState,
  action: DessertDataListDispatchType,
): InitialState => {
  if (action.type !== 'DESSERT_FETCHING_DATA') return state;
  const matzipList = action.payload;
  return {
    ...state,
    matzipList,
    error: '',
    loading: false,
  };
};

const error = (
  state: InitialState,
  action: DessertDataListDispatchType,
): InitialState => {
  if (action.type !== 'DESSERT_ERROR') return state;
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
  action: DessertDataListDispatchType,
): InitialState => {
  if (action.type !== 'DESSERT_LOADING') return state;
  return {
    ...state,
    matzipList: [],
    loading: true,
    error: '',
  };
};

export default DessertDataListReducer;
