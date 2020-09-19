import { MatzipDataType } from '../types/Types';
import { postError } from './ErrorReducerActionTypes';

export const CHINESE_LOADING = 'CHINESE_LOADING';
export const CHINESE_FETCHING_DATA = 'CHINESE_FETCHING_DATA';


interface chineseLoading {
  type: typeof CHINESE_LOADING;
}

interface chineseFetchingData {
  type: typeof CHINESE_FETCHING_DATA;
  payload: MatzipDataType[];
}


export type ChineseDataListDispatchType =

  | chineseFetchingData
  | chineseLoading | postError;
