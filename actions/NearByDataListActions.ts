import {
  NEAR_BY_FETCHING,
  NEAR_BY_LOADING,
  NearByDataDispatchType,
} from './NearByDataListActionTypes';

import { Dispatch } from 'redux';
import { ENDPOINT } from '../constants/Constants';
import { MatzipDataType } from '../types/Types';
import axios from 'axios';

export const fetchingNearBy = (
  area1Name: string,
  area2Name: string,
  area3Name: string,
) => async (dispatch: Dispatch<NearByDataDispatchType>) => {
  dispatch({
    type: NEAR_BY_LOADING,
  });
  try {
    const response = await axios.get(
      `${ENDPOINT}/matzip?area1Name=${area1Name}&area2Name=${area2Name}&area3Name=${area3Name}&category=맛집`,
    );
    const data = response.data;
    const matzipList = data.matzipList as MatzipDataType[];
    return dispatch({
      type: NEAR_BY_FETCHING,
      payload: matzipList,
    });
  } catch (err) {
    return dispatch({
      type: 'POST_ERROR',
      payload: '근처에 있는 맛집 데이터를 불러오던 도중에 에러가 발생하였습니다 ㅠ_ㅠ 개발자에게 문의해주세요!'
    });
  }
};
