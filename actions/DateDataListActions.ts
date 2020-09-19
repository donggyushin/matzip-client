import {
  DATE_FETCHING_DATA,
  DATE_LOADING,
  DateDataListDispatchType,
} from './DateDataListActionTypes';

import { Dispatch } from 'redux';
import { ENDPOINT } from '../constants/Constants';
import { MatzipDataType } from '../types/Types';
import axios from 'axios';

export const fetchingDateData = (
  area1Name: string,
  area2Name: string,
  area3Name: string,
) => async (dispatch: Dispatch<DateDataListDispatchType>) => {
  dispatch({
    type: DATE_LOADING,
  });
  try {
    const response = await axios.get(
      `${ENDPOINT}/matzip?area1Name=${area1Name}&area2Name=${area2Name}&area3Name=${area3Name}&category=데이트`,
    );
    const data = response.data;
    const matzipList = data.matzipList as MatzipDataType[];
    return dispatch({
      type: DATE_FETCHING_DATA,
      payload: matzipList,
    });
  } catch (err) {
    return dispatch({
      type: 'POST_ERROR',
      payload: '근처 데이트 음식점을 불러오는데 에러가 발생하였습니다 ㅠ_ㅠ 개발자에게 문의해주세요!'
    });
  }
};
