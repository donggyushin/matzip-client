import { GET_LOCATION_SUCCESS, LocationDispatchType } from './LocationActionTypes'

import { Dispatch } from 'redux'

export const getLocation = (longitude: string, latitude: string) => (dispatch: Dispatch<LocationDispatchType>) => {
  return dispatch({
    type: GET_LOCATION_SUCCESS,
    payload: {
      latitude,
      longitude
    }
  })
}