import {MatzipDataType} from './MatzipDataListActionTypes';

export const KOREAN_LOADING = 'KOREAN_LOADING';
export const KOREAN_ERROR = 'KOREAN_ERROR';
export const KOREAN_FETCHING = 'KOREAN_FETCHING';

interface loading {
  type: typeof KOREAN_LOADING;
}

interface error {
  type: typeof KOREAN_ERROR;
  payload: string;
}

interface fetching {
  type: typeof KOREAN_FETCHING;
  payload: MatzipDataType[];
}

export type KoreanDataListDispatchType = loading | error | fetching;
