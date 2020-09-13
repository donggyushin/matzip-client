import {
  GET_LOCATION_LOADING,
  GET_LOCATION_SUCCESS,
  LocationDispatchType,
} from './LocationActionTypes';

import {Dispatch} from 'redux';

export const getLocation = (longitude: string, latitude: string) => (
  dispatch: Dispatch<LocationDispatchType>,
) => {
  dispatch({
    type: GET_LOCATION_LOADING,
  });
  return dispatch({
    type: GET_LOCATION_SUCCESS,
    payload: {
      latitude,
      longitude,
    },
  });
};
