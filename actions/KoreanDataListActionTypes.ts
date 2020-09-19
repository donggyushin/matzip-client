import { MatzipDataType } from '../types/Types';
import { postError } from './ErrorReducerActionTypes';

export const KOREAN_LOADING = 'KOREAN_LOADING';
export const KOREAN_FETCHING = 'KOREAN_FETCHING';

interface loading {
  type: typeof KOREAN_LOADING;
}


interface fetching {
  type: typeof KOREAN_FETCHING;
  payload: MatzipDataType[];
}

export type KoreanDataListDispatchType = loading | fetching | postError;
