export const FETCH_ADDRESS_SUCCESS = 'FETCH_ADDRESS_SUCCESS'
export const FETCH_ADDRESS_FAIL = 'FETCH_ADDRESS_FAIL'


export type AddressType = {
  area1Name: string
  area2Name: string
  area3Name: string
}

export interface fetchAddressFailDispatch {
  type: typeof FETCH_ADDRESS_FAIL
}

export interface fetchAddressSuccessDispatch {
  type: typeof FETCH_ADDRESS_SUCCESS
  payload: AddressType
}

export type AddressDispatchType = fetchAddressSuccessDispatch | fetchAddressFailDispatch