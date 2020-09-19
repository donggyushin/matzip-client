import { MatzipDataType } from '../types/Types';
import { postError } from './ErrorReducerActionTypes';

export const DESSERT_LOADING = 'DESSERT_LOADING';
export const DESSERT_FETCHING_DATA = 'DESSERT_FETCHING_DATA';

interface loading {
  type: typeof DESSERT_LOADING;
}

interface fetchingData {
  type: typeof DESSERT_FETCHING_DATA;
  payload: MatzipDataType[];
}

export type DessertDataListDispatchType = loading | fetchingData | postError;
