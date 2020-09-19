import { MatzipDataType } from '../types/Types';
import { postError } from './ErrorReducerActionTypes';

export const DATE_LOADING = 'DATE_LOADING';
export const DATE_FETCHING_DATA = 'DATE_FETCHING_DATA';

interface dateLoading {
  type: typeof DATE_LOADING;
}


interface dateFetchingData {
  type: typeof DATE_FETCHING_DATA;
  payload: MatzipDataType[];
}

export type DateDataListDispatchType =

  | dateFetchingData
  | dateLoading | postError;
