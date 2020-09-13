import {
  GET_LOCATION_SUCCESS,
  LocationDispatchType,
  LocationType,
} from '../actions/LocationActionTypes';

interface InitialState {
  loading: boolean;
  location: LocationType;
}

const initialState: InitialState = {
  loading: true,
  location: {
    longitude: '',
    latitude: '',
  },
};

const LocationReducer = (
  state = initialState,
  action: LocationDispatchType,
): InitialState => {
  switch (action.type) {
    case GET_LOCATION_SUCCESS:
      return getLocationSuccess(state, action);
    case 'GET_LOCATION_LOADING':
      return loading(state, action);
    default:
      return state;
  }
};

const loading = (
  state: InitialState,
  action: LocationDispatchType,
): InitialState => {
  if (action.type !== 'GET_LOCATION_LOADING') return state;
  return {
    ...state,
    loading: true,
    location: {
      longitude: '',
      latitude: '',
    },
  };
};

const getLocationSuccess = (
  state: InitialState,
  action: LocationDispatchType,
): InitialState => {
  if (action.type !== 'GET_LOCATION_SUCCESS') return state;
  const location = action.payload;
  return {
    ...state,
    loading: false,
    location,
  };
};

export default LocationReducer;
