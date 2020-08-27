export const FETCH_ADDRESS_SUCCESS = 'FETCH_ADDRESS_SUCCESS';
export const FETCH_ADDRESS_FAIL = 'FETCH_ADDRESS_FAIL';
export const ADDRESS_LOADING = 'ADDRESS_LOADING';

export type AddressType = {
  area1Name: string;
  area2Name: string;
  area3Name: string;
};

export interface fetchAddressFailDispatch {
  type: typeof FETCH_ADDRESS_FAIL;
}

export interface addressLoadingDispatch {
  type: typeof ADDRESS_LOADING;
}

export interface fetchAddressSuccessDispatch {
  type: typeof FETCH_ADDRESS_SUCCESS;
  payload: AddressType;
}

export type AddressDispatchType =
  | fetchAddressSuccessDispatch
  | fetchAddressFailDispatch
  | addressLoadingDispatch;
