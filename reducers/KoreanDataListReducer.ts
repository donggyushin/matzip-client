import {KoreanDataListDispatchType} from '../actions/KoreanDataListActionTypes';
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

const KoreanDataListReducer = (
  state = initialState,
  action: KoreanDataListDispatchType,
): InitialState => {
  switch (action.type) {
    case 'KOREAN_FETCHING':
      return fetching(state, action);
    case 'KOREAN_LOADING':
      return loading(state, action);
    case 'KOREAN_ERROR':
      return error(state, action);
    default:
      return state;
  }
};

const error = (
  state: InitialState,
  action: KoreanDataListDispatchType,
): InitialState => {
  if (action.type !== 'KOREAN_ERROR') return state;
  const error = action.payload;
  return {
    ...state,
    error,
    matzipList: [],
    loading: false,
  };
};

const loading = (
  state: InitialState,
  action: KoreanDataListDispatchType,
): InitialState => {
  if (action.type !== 'KOREAN_LOADING') return state;
  return {
    ...state,
    matzipList: [],
    error: '',
    loading: true,
  };
};

const fetching = (
  state: InitialState,
  action: KoreanDataListDispatchType,
): InitialState => {
  if (action.type !== 'KOREAN_FETCHING') return state;
  const matzipList = action.payload;
  return {
    ...state,
    matzipList,
    error: '',
    loading: false,
  };
};

export default KoreanDataListReducer;
