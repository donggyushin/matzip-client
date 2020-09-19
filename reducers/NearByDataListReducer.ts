import { MatzipDataType } from '../types/Types';
import { NearByDataDispatchType } from '../actions/NearByDataListActionTypes';

interface InitialState {
  matzipList: MatzipDataType[];
  loading: boolean;

}

const initialState: InitialState = {
  matzipList: [],
  loading: true,

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
    default:
      return state;
  }
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
  };
};

export default NearByDataListReducer;
