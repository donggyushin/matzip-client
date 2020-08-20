import { GET_LOCATION_SUCCESS, LocationDispatchType, LocationType } from "../actions/LocationActionTypes"

interface InitialState {
  loading: boolean
  location: LocationType
}

const initialState: InitialState = {
  loading: true,
  location: {
    longitude: "",
    latitude: ""
  }

}

const LocationReducer = (state = initialState, action: LocationDispatchType): InitialState => {
  switch (action.type) {
    case GET_LOCATION_SUCCESS:
      return getLocationSuccess(state, action)
    default:
      return state
  }
}

const getLocationSuccess = (state: InitialState, action: LocationDispatchType): InitialState => {
  const location = action.payload
  return {
    ...state,
    loading: false,
    location
  }
}

export default LocationReducer