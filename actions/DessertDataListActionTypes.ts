import {MatzipDataType} from './MatzipDataListActionTypes';

export const DESSERT_LOADING = 'DESSERT_LOADING';
export const DESSERT_ERROR = 'DESSERT_ERROR';
export const DESSERT_FETCHING_DATA = 'DESSERT_FETCHING_DATA';

interface loading {
  type: typeof DESSERT_LOADING;
}

interface error {
  type: typeof DESSERT_ERROR;
  payload: string;
}

interface fetchingData {
  type: typeof DESSERT_FETCHING_DATA;
  payload: MatzipDataType[];
}

export type DessertDataListDispatchType = loading | error | fetchingData;
