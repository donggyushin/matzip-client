export const MATZIP_DATA_LIST_LOADING = 'MATZIP_DATA_LIST_LOADING';
export const MATZIP_DATA_LIST_ERROR = 'MATZIP_DATA_LIST_ERROR';
export const MATZIP_DATA_LIST_FETCHING_DATA = 'MATZIP_DATA_LIST_FETCHING_DATA';

export interface MatzipDataType {
  title: string;
  category: string;
  delievery: string;
  description: string;
  star: string;
  visitorReview: string;
  blogReview: string;
  hashtags: string[];
  thumbnailUrls: string[];
  detailPageUrl: string;
}

interface matzipDataListLoading {
  type: typeof MATZIP_DATA_LIST_LOADING;
}

interface matzipDataListFetchingData {
  type: typeof MATZIP_DATA_LIST_FETCHING_DATA;
  payload: MatzipDataType[];
}

interface matzipDataListError {
  type: typeof MATZIP_DATA_LIST_ERROR;
  payload: string;
}

export type MatzipDataListDispatchType =
  | matzipDataListLoading
  | matzipDataListFetchingData
  | matzipDataListError;
