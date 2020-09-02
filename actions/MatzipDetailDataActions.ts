import {
  MATZIP_DETAIL_FETCH_FAIL,
  MATZIP_DETAIL_FETCH_SUCCESS,
  MATZIP_DETAIL_LOADING,
  MATZIP_DETAIL_STOP_LOADING,
  MatzipDetailData,
  MatzipDetailDispatchType,
} from './MatzipDetailDataActionTypes';

import {Dispatch} from 'redux';
import {ENDPOINT} from '../constants/Constants';
import axios from 'axios';

export const fetchMatzipDetailData = (url: string) => async (
  dispatch: Dispatch<MatzipDetailDispatchType>,
) => {
  dispatch({
    type: MATZIP_DETAIL_LOADING,
  });
  try {
    const response = await axios.get(`${ENDPOINT}/matzip/detail?url=${url}`);
    const data = response.data as MatzipDetailData;

    dispatch({
      type: MATZIP_DETAIL_FETCH_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: MATZIP_DETAIL_FETCH_FAIL,
      payload: '데이터를 받아오는데 실패하였습니다. ',
    });
  }
  dispatch({
    type: MATZIP_DETAIL_STOP_LOADING,
  });
};
