import { KoreanDataListDispatchType } from '../actions/KoreanDataListActionTypes';
import { MatzipDataType } from '../types/Types';

interface InitialState {
  matzipList: MatzipDataType[];
  loading: boolean;

}

const initialState: InitialState = {
  matzipList: [],
  loading: false,

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

    default:
      return state;
  }
};


const loading = (
  state: InitialState,
  action: KoreanDataListDispatchType,
): InitialState => {
  if (action.type !== 'KOREAN_LOADING') return state;
  return {
    ...state,
    matzipList: [],

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

    loading: false,
  };
};

export default KoreanDataListReducer;
