import {
  MATZIP_DATA_LIST_ERROR,
  MATZIP_DATA_LIST_FETCHING_DATA,
  MATZIP_DATA_LIST_LOADING,
  MatzipDataListDispatchType,
  MatzipDataType,
} from '../actions/MatzipDataListActionTypes';

interface InitialState {
  matzipList: MatzipDataType[];
  loading: boolean;
  error: string;
}

const intialState: InitialState = {
  matzipList: [],
  loading: true,
  error: '',
};

const MatzipDataListReducer = (
  state = intialState,
  action: MatzipDataListDispatchType,
): InitialState => {
  switch (action.type) {
    case MATZIP_DATA_LIST_LOADING:
      return loading(state, action);
    case MATZIP_DATA_LIST_ERROR:
      return error(state, action);
    case MATZIP_DATA_LIST_FETCHING_DATA:
      return fetching(state, action);
    default:
      return state;
  }
};

const fetching = (
  state: InitialState,
  action: MatzipDataListDispatchType,
): InitialState => {
  if (action.type !== MATZIP_DATA_LIST_FETCHING_DATA) return state;
  const matzipList = action.payload;
  return {
    loading: false,
    matzipList,
    error: '',
  };
};

const error = (
  state: InitialState,
  action: MatzipDataListDispatchType,
): InitialState => {
  if (action.type !== MATZIP_DATA_LIST_ERROR) return state;
  const error = action.payload;
  return {
    loading: false,
    error,
    matzipList: [],
  };
};

const loading = (
  state: InitialState,
  action: MatzipDataListDispatchType,
): InitialState => {
  if (action.type !== MATZIP_DATA_LIST_LOADING) return state;
  return {
    loading: true,
    error: '',
    matzipList: [],
  };
};

export default MatzipDataListReducer;
