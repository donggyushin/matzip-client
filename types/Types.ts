export type CategoryType =
  | '한식'
  | '맛집'
  | '일식'
  | '데이트'
  | '중식'
  | '디저트';


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