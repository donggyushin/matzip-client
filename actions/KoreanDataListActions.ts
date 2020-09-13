import {
  KOREAN_ERROR,
  KOREAN_FETCHING,
  KOREAN_LOADING,
  KoreanDataListDispatchType,
} from './KoreanDataListActionTypes';

import {Dispatch} from 'redux';
import {ENDPOINT} from '../constants/Constants';
import {MatzipDataType} from './MatzipDataListActionTypes';
import axios from 'axios';

export const fetchingKoreanData = (
  area1Name: string,
  area2Name: string,
  area3Name: string,
) => async (dispatch: Dispatch<KoreanDataListDispatchType>) => {
  dispatch({
    type: KOREAN_LOADING,
  });
  try {
    const response = await axios.get(
      `${ENDPOINT}/matzip?area1Name=${area1Name}&area2Name=${area2Name}&area3Name=${area3Name}&category=한식`,
    );
    const data = response.data;
    const matzipList = data.matzipList as MatzipDataType[];
    return dispatch({
      type: KOREAN_FETCHING,
      payload: matzipList,
    });
  } catch (err) {
    return dispatch({
      type: KOREAN_ERROR,
      payload:
        '주변에 있는 맛집 데이터를 가져오지 못하였습니다 ㅠ.ㅠ 관리자에게 문의해주세요',
    });
  }
};
