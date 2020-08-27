import {
  ADDRESS_LOADING,
  AddressDispatchType,
  AddressType,
  FETCH_ADDRESS_FAIL,
  FETCH_ADDRESS_SUCCESS,
} from './AddressActionTypes';

import {Dispatch} from 'redux';
import {ENDPOINT} from '../constants/Constants';
import axios from 'axios';

export const fetchAddress = (longitude: string, latitude: string) => async (
  dispatch: Dispatch<AddressDispatchType>,
) => {
  try {
    dispatch({
      type: ADDRESS_LOADING,
    });

    const res = await axios.get(
      `${ENDPOINT}/address?longitude=${longitude}&latitude=${latitude}`,
    );
    const data = res.data as AddressType;

    return dispatch({
      type: FETCH_ADDRESS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    return dispatch({
      type: FETCH_ADDRESS_FAIL,
    });
  }
};
