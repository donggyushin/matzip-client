import {
  CHINESE_FETCHING_DATA,
  CHINESE_LOADING,
  ChineseDataListDispatchType,
} from './ChineseDataListActionTypes';

import { Dispatch } from 'redux';
import { ENDPOINT } from '../constants/Constants';
import { MatzipDataType } from '../types/Types';
import axios from 'axios';

export const fetchingChineseData = (
  area1Name: string,
  area2Name: string,
  area3Name: string,
) => async (dispatch: Dispatch<ChineseDataListDispatchType>) => {
  dispatch({
    type: CHINESE_LOADING,
  });
  try {
    const response = await axios.get(
      `${ENDPOINT}/matzip?area1Name=${area1Name}&area2Name=${area2Name}&area3Name=${area3Name}&category=중국집`,
    );
    const data = response.data;
    const matzipList = data.matzipList as MatzipDataType[];
    return dispatch({
      type: CHINESE_FETCHING_DATA,
      payload: matzipList,
    });
  } catch (err) {
    console.error(err);
    return dispatch({
      type: 'POST_ERROR',
      payload: '근처 중국 음식 데이터를 받아오는데 에러가 발생하였습니다 ㅠ_ㅠ 개발자에게 문의해주세요!'
    });
  }
};
