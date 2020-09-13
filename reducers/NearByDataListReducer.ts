import {MatzipDataType} from '../actions/MatzipDataListActionTypes';
import {NearByDataDispatchType} from '../actions/NearByDataListActionTypes';

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

const NearByDataListReducer = (
  state = initialState,
  action: NearByDataDispatchType,
): InitialState => {
  switch (action.type) {
    case 'NEAR_BY_LOADING':
      return loading(state, action);
    case 'NEAR_BY_FETCHING':
      return fetching(state, action);
    case 'NEAR_BY_ERROR':
      return error(state, action);
    default:
      return state;
  }
};

const error = (
  state: InitialState,
  action: NearByDataDispatchType,
): InitialState => {
  if (action.type !== 'NEAR_BY_ERROR') return state;
  const error = action.payload;
  return {
    ...state,
    error,
    matzipList: [],
    loading: false,
  };
};

const fetching = (
  state: InitialState,
  action: NearByDataDispatchType,
): InitialState => {
  if (action.type !== 'NEAR_BY_FETCHING') return state;
  const matzipList = action.payload;
  return {
    ...state,
    matzipList,
    error: '',
    loading: false,
  };
};

const loading = (
  state: InitialState,
  action: NearByDataDispatchType,
): InitialState => {
  if (action.type !== 'NEAR_BY_LOADING') return state;
  return {
    ...state,
    loading: true,
    matzipList: [],
    error: '',
  };
};

export default NearByDataListReducer;
