import { MatzipDataType } from '../types/Types';
import { postError } from './ErrorReducerActionTypes';

export const JAPANESE_LOADING = 'JAPANESE_LOADING';
export const JAPANESE_FETCHING_DATA = 'JAPANESE_FETCHING_DATA';

interface loading {
  type: typeof JAPANESE_LOADING;
}


interface fetching {
  type: typeof JAPANESE_FETCHING_DATA;
  payload: MatzipDataType[];
}

export type JapaneseDataListDispatchType = loading | fetching | postError;
