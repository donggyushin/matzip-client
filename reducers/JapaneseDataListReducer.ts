import { JapaneseDataListDispatchType } from '../actions/JapaneseDataListActionTypes';
import { MatzipDataType } from '../types/Types';

interface InitialState {
  matzipList: MatzipDataType[];
  loading: boolean;

}

const initialState: InitialState = {
  matzipList: [],
  loading: false,

};

const JapaneseDataListReducer = (
  state = initialState,
  action: JapaneseDataListDispatchType,
): InitialState => {
  switch (action.type) {
    case 'JAPANESE_LOADING':
      return loading(state, action);

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
    loading: false,
    matzipList,
  };
};


const loading = (
  state: InitialState,
  action: JapaneseDataListDispatchType,
): InitialState => {
  if (action.type !== 'JAPANESE_LOADING') return state;
  return {
    ...state,
    loading: true,
    matzipList: [],
  };
};

export default JapaneseDataListReducer;
