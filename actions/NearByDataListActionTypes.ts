import {MatzipDataType} from './MatzipDataListActionTypes';

export const NEAR_BY_LOADING = 'NEAR_BY_LOADING';
export const NEAR_BY_ERROR = 'NEAR_BY_ERROR';
export const NEAR_BY_FETCHING = 'NEAR_BY_FETCHING';

interface loading {
  type: typeof NEAR_BY_LOADING;
}

interface error {
  type: typeof NEAR_BY_ERROR;
  payload: string;
}

interface fetching {
  type: typeof NEAR_BY_FETCHING;
  payload: MatzipDataType[];
}

export type NearByDataDispatchType = loading | fetching | error;
