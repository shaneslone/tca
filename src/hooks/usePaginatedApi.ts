import { useState, useEffect } from 'react';
import { fetchDataFunction } from '../types';
import parse from 'parse-link-header';

const usePageinatedApi = <T>(
  url: string,
  limit: number
): [T[], parse.Links | null, fetchDataFunction] => {
  const [data, setData] = useState<T[]>([]);
  const [pages, setPages] = useState<parse.Links | null>(null);

  const fetchData = async (url: string) => {
    const res = await fetch(url);
    const links = res.headers.get('link');
    setPages(parse(links));
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchData(`${url}?_page=1&_limit=${limit}`);
  }, [url, limit]);

  return [data, pages, fetchData];
};

export default usePageinatedApi;