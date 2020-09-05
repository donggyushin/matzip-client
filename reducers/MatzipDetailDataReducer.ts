import {
  MatzipDetailData,
  MatzipDetailDispatchType,
} from '../actions/MatzipDetailDataActionTypes';

interface InitialState {
  loading: boolean;
  matzip: MatzipDetailData;
  error: string;
}

const initialState: InitialState = {
  loading: true,
  matzip: {
    thumbnails: [],
    title1: '',
    title2: '',
    star: '',
    visitorsReview: '',
    blogReview: '',
    phoneString: '',
    address1: '',
    address2: '',
    workTime: '',
    siteUrl: '',
    menus: [],
    visitorsPhotos: [],
    visitorReviews: [],
    blogReviews: [],
    mapUrl: '',
  },
  error: '',
};

const MatzipDetailDataReducer = (
  state = initialState,
  action: MatzipDetailDispatchType,
): InitialState => {
  switch (action.type) {
    case 'MATZIP_DETAIL_FETCH_FAIL':
      return fetchingFail(state, action);

    case 'MATZIP_DETAIL_FETCH_SUCCESS':
      return fetchingSuccess(state, action);

    case 'MATZIP_DETAIL_LOADING':
      return loading(state, action);

    case 'MATZIP_DETAIL_STOP_LOADING':
      return stopLoading(state, action);

    default:
      return state;
  }
};

const fetchingFail = (
  state: InitialState,
  action: MatzipDetailDispatchType,
): InitialState => {
  if (action.type !== 'MATZIP_DETAIL_FETCH_FAIL') return state;
  const error = action.payload;
  return {
    ...state,
    error,
    loading: false,
  };
};

const fetchingSuccess = (
  state: InitialState,
  action: MatzipDetailDispatchType,
): InitialState => {
  if (action.type !== 'MATZIP_DETAIL_FETCH_SUCCESS') return state;
  const matzip = action.payload;
  return {
    ...state,
    loading: false,
    matzip,
    error: '',
  };
};

const stopLoading = (
  state: InitialState,
  action: MatzipDetailDispatchType,
): InitialState => {
  return {
    ...state,
    loading: false,
  };
};

const loading = (
  state: InitialState,
  action: MatzipDetailDispatchType,
): InitialState => {
  return {
    ...state,
    loading: true,
  };
};

export default MatzipDetailDataReducer;
