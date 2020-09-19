import { MatzipDataType } from '../types/Types';
import { postError } from './ErrorReducerActionTypes';

export const NEAR_BY_LOADING = 'NEAR_BY_LOADING';
export const NEAR_BY_FETCHING = 'NEAR_BY_FETCHING';

interface loading {
  type: typeof NEAR_BY_LOADING;
}


interface fetching {
  type: typeof NEAR_BY_FETCHING;
  payload: MatzipDataType[];
}

export type NearByDataDispatchType = loading | fetching | postError;
