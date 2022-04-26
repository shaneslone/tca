import { Links } from 'parse-link-header';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type fetchDataFunction = (url: string) => Promise<void>;

export interface UsePaginatedApiData {
  posts: Post[];
  pages: Links | null;
  getPage: fetchDataFunction;
}
