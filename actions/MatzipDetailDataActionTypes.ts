import { postError } from "./ErrorReducerActionTypes";

export const MATZIP_DETAIL_FETCH_SUCCESS = 'MATZIP_DETAIL_FETCH_SUCCESS';
export const MATZIP_DETAIL_STOP_LOADING = 'MATZIP_DETAIL_STOP_LOADING';
export const MATZIP_DETAIL_LOADING = 'MATZIP_DETAIL_LOADING';

interface VisitorReview {
  star: string;
  text: string;
  userName: string;
  userPhoto: string;
  date: string;
}

export interface Menu {
  text: string;
  price: string;
  imageUrl: string;
}

interface BlogReview {
  title: string;
  blogTitle: string;
  date: string;
  description: string;
  thumbnailUrl: string;
  blogUrl: string;
}

export interface MatzipDetailData {
  thumbnails: string[];
  title1: string;
  title2: string;
  star: string;
  visitorsReview: string;
  blogReview: string;
  phoneString: string;
  address1: string;
  address2: string;
  workTime: string[];
  siteUrl: string;
  menus: Menu[];
  menuUrl: string;
  visitorsPhotos: string[];
  visitorReviews: VisitorReview[];
  blogReviews: BlogReview[];
  mapUrl: string;
}

interface MatzipDetailFetchSuccess {
  type: typeof MATZIP_DETAIL_FETCH_SUCCESS;
  payload: MatzipDetailData;
}


interface MatzipDetailStopLoading {
  type: typeof MATZIP_DETAIL_STOP_LOADING;
}

interface MatzipDetailLoading {
  type: typeof MATZIP_DETAIL_LOADING;
}

export type MatzipDetailDispatchType =
  | MatzipDetailFetchSuccess

  | MatzipDetailStopLoading
  | MatzipDetailLoading | postError;
