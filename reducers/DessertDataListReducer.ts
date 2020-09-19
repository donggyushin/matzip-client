import { DessertDataListDispatchType } from '../actions/DessertDataListActionTypes';
import { MatzipDataType } from '../types/Types';

interface InitialState {
  matzipList: MatzipDataType[];
  loading: boolean;

}

const initialState: InitialState = {
  matzipList: [],
  loading: true,

};

const DessertDataListReducer = (
  state = initialState,
  action: DessertDataListDispatchType,
): InitialState => {
  switch (action.type) {
    case 'DESSERT_LOADING':
      return loading(state, action);
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
    loading: false,
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
  };
};

export default DessertDataListReducer;
