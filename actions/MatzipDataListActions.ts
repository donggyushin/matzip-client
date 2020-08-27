import {
  MATZIP_DATA_LIST_ERROR,
  MATZIP_DATA_LIST_FETCHING_DATA,
  MATZIP_DATA_LIST_LOADING,
  MatzipDataListDispatchType,
  MatzipDataType,
} from './MatzipDataListActionTypes';

import {Dispatch} from 'redux';
import {ENDPOINT} from '../constants/Constants';
import axios from 'axios';

export const fetchingMatzipData = (
  area1Name: string,
  area2Name: string,
  area3Name: string,
  category: string,
) => async (dispatch: Dispatch<MatzipDataListDispatchType>) => {
  try {
    dispatch({
      type: MATZIP_DATA_LIST_LOADING,
    });
    const response = await axios.get(
      `${ENDPOINT}/matzip?area1Name=${area1Name}&area2Name=${area2Name}&area3Name=${area3Name}&category=${category}`,
    );
    const data = response.data;
    const matzipList = data.matzipList as MatzipDataType[];
    return dispatch({
      type: MATZIP_DATA_LIST_FETCHING_DATA,
      payload: matzipList,
    });
  } catch (err) {
    return dispatch({
      type: MATZIP_DATA_LIST_ERROR,
      payload: '주변에 있는 맛집 데이터를 가져오지 못하였습니다 ㅠ.ㅠ',
    });
  }
};
