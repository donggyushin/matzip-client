export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';
export const GET_LOCATION_LOADING = 'GET_LOCATION_LOADING';

export type LocationType = {
  longitude: string;
  latitude: string;
};

interface loading {
  type: typeof GET_LOCATION_LOADING;
}

export interface getLocationSuccessDispatch {
  type: typeof GET_LOCATION_SUCCESS;
  payload: LocationType;
}

export type LocationDispatchType = getLocationSuccessDispatch | loading;
