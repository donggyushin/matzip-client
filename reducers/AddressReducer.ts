import { AddressDispatchType, AddressType, FETCH_ADDRESS_FAIL, FETCH_ADDRESS_SUCCESS } from '../actions/AddressActionTypes'

interface InitialState {
  loading: boolean
  address: AddressType
  error: string
}

const initialState: InitialState = {
  loading: true,
  address: {
    area1Name: "",
    area2Name: "",
    area3Name: ""
  },
  error: ""
}

const AddressReducer = (state = initialState, action: AddressDispatchType): InitialState => {
  switch (action.type) {
    case FETCH_ADDRESS_FAIL:
      return fetchAddressFail(state, action)
    case FETCH_ADDRESS_SUCCESS:
      return fetchAddressSuccess(state, action)
    default:
      return state
  }
}

const fetchAddressSuccess = (state: InitialState, action: AddressDispatchType): InitialState => {
  if (action.type === FETCH_ADDRESS_SUCCESS) {
    const address = action.payload
    return {
      ...state,
      loading: false,
      address
    }
  } else {
    return fetchAddressFail(state, action)
  }
}

const fetchAddressFail = (state: InitialState, action: AddressDispatchType): InitialState => {
  return {
    ...state,
    loading: false,
    error: "주소를 불러오는데 실패하였습니다."
  }
}

export default AddressReducer