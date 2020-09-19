import { ChineseDataListDispatchType } from '../actions/ChineseDataListActionTypes';
import { MatzipDataType } from '../types/Types';

interface InitialState {
  matzipList: MatzipDataType[];
  loading: boolean;

}

const initialState: InitialState = {
  matzipList: [],
  loading: true,

};

const ChineseDataListReducer = (
  state = initialState,
  action: ChineseDataListDispatchType,
): InitialState => {
  switch (action.type) {
    case 'CHINESE_FETCHING_DATA':
      return fetchingData(state, action);

    case 'CHINESE_LOADING':
      return loading(state, action);
    default:
      return state;
  }
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
  };
};

export default ChineseDataListReducer;
