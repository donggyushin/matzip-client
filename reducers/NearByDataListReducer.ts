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

const NearByDataListReducer = (
  state = initialState,
  action: any,
): InitialState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default NearByDataListReducer;
