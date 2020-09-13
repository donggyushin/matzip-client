import {MatzipDataType} from './MatzipDataListActionTypes';

export const DATE_LOADING = 'DATE_LOADING';
export const DATE_ERROR = 'DATE_ERROR';
export const DATE_FETCHING_DATA = 'DATE_FETCHING_DATA';

interface dateLoading {
  type: typeof DATE_LOADING;
}

interface dateError {
  type: typeof DATE_ERROR;
  payload: string;
}

interface dateFetchingData {
  type: typeof DATE_FETCHING_DATA;
  payload: MatzipDataType[];
}

export type DateDataListDispatchType =
  | dateError
  | dateFetchingData
  | dateLoading;
