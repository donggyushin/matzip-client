import {
  JAPANESE_ERROR,
  JAPANESE_FETCHING_DATA,
  JAPANESE_LOADING,
  JapaneseDataListDispatchType,
} from './JapaneseDataListActionTypes';

import {Dispatch} from 'redux';
import {ENDPOINT} from '../constants/Constants';
import {MatzipDataType} from './MatzipDataListActionTypes';
import axios from 'axios';

export const fetchingJapaneseData = (
  area1Name: string,
  area2Name: string,
  area3Name: string,
) => async (dispatch: Dispatch<JapaneseDataListDispatchType>) => {
  dispatch({
    type: JAPANESE_LOADING,
  });
  try {
    const response = await axios.get(
      `${ENDPOINT}/matzip?area1Name=${area1Name}&area2Name=${area2Name}&area3Name=${area3Name}&category=일식`,
    );
    const data = response.data;
    const matzipList = data.matzipList as MatzipDataType[];
    return dispatch({
      type: JAPANESE_FETCHING_DATA,
      payload: matzipList,
    });
  } catch (err) {
    return dispatch({
      type: JAPANESE_ERROR,
      payload:
        '주변에 있는 맛집 데이터를 가져오지 못하였습니다 ㅠ.ㅠ 관리자에게 문의해주세요',
    });
  }
};
