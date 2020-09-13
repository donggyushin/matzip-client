import {JapaneseDataListDispatchType} from '../actions/JapaneseDataListActionTypes';
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

const JapaneseDataListReducer = (
  state = initialState,
  action: JapaneseDataListDispatchType,
): InitialState => {
  switch (action.type) {
    case 'JAPANESE_LOADING':
      return loading(state, action);
    case 'JAPANESE_ERROR':
      return error(state, action);
    case 'JAPANESE_FETCHING_DATA':
      return fetching(state, action);
    default:
      return state;
  }
};

const fetching = (
  state: InitialState,
  action: JapaneseDataListDispatchType,
): InitialState => {
  if (action.type !== 'JAPANESE_FETCHING_DATA') return state;
  const matzipList = action.payload;
  return {
    ...state,
    error: '',
    loading: false,
    matzipList,
  };
};

const error = (
  state: InitialState,
  action: JapaneseDataListDispatchType,
): InitialState => {
  if (action.type !== 'JAPANESE_ERROR') return state;
  const error = action.payload;
  return {
    ...state,
    error,
    loading: false,
    matzipList: [],
  };
};

const loading = (
  state: InitialState,
  action: JapaneseDataListDispatchType,
): InitialState => {
  if (action.type !== 'JAPANESE_LOADING') return state;
  return {
    ...state,
    error: '',
    loading: true,
    matzipList: [],
  };
};

export default JapaneseDataListReducer;
