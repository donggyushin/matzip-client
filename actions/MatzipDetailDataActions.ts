import {
  MATZIP_DETAIL_FETCH_SUCCESS,
  MATZIP_DETAIL_LOADING,
  MATZIP_DETAIL_STOP_LOADING,
  MatzipDetailData,
  MatzipDetailDispatchType,
} from './MatzipDetailDataActionTypes';

import { Dispatch } from 'redux';
import { ENDPOINT } from '../constants/Constants';
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

    return dispatch({
      type: MATZIP_DETAIL_FETCH_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: 'POST_ERROR',
      payload: '음식점 데이터를 불러오던 도중에 에러가 발생하였습니다 ㅠ_ㅠ 개발자에게 문의해주세요!'
    });
  }

  dispatch({
    type: MATZIP_DETAIL_STOP_LOADING,
  });
};
