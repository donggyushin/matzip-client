export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS'


export type LocationType = {
  longitude: string
  latitude: string
}

export interface getLocationSuccessDispatch {
  type: typeof GET_LOCATION_SUCCESS,
  payload: LocationType
}

export type LocationDispatchType = getLocationSuccessDispatch