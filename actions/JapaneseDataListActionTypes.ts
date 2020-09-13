import {MatzipDataType} from './MatzipDataListActionTypes';

export const JAPANESE_LOADING = 'JAPANESE_LOADING';
export const JAPANESE_ERROR = 'JAPANESE_ERROR';
export const JAPANESE_FETCHING_DATA = 'JAPANESE_FETCHING_DATA';

interface loading {
  type: typeof JAPANESE_LOADING;
}

interface error {
  type: typeof JAPANESE_ERROR;
  payload: string;
}

interface fetching {
  type: typeof JAPANESE_FETCHING_DATA;
  payload: MatzipDataType[];
}

export type JapaneseDataListDispatchType = loading | error | fetching;
