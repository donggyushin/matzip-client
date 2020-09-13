import {MatzipDataType} from './MatzipDataListActionTypes';

export const CHINESE_LOADING = 'CHINESE_LOADING';
export const CHINESE_FETCHING_DATA = 'CHINESE_FETCHING_DATA';
export const CHINESE_ERROR = 'CHINESE_ERROR';

interface chineseLoading {
  type: typeof CHINESE_LOADING;
}

interface chineseFetchingData {
  type: typeof CHINESE_FETCHING_DATA;
  payload: MatzipDataType[];
}

interface chineseError {
  type: typeof CHINESE_ERROR;
  payload: string;
}

export type ChineseDataListDispatchType =
  | chineseError
  | chineseFetchingData
  | chineseLoading;
