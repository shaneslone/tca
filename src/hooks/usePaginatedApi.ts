import { useState, useEffect } from 'react';
import { fetchDataFunction } from '../types';
import { parseLinkHeader, Links } from '@web3-storage/parse-link-header';
import { fixLinks } from '../utils/fixLinks';

const usePageinatedApi = <T>(
  url: string,
  limit: number
): [T[], Links | null, fetchDataFunction] => {
  const [data, setData] = useState<T[]>([]);
  const [pages, setPages] = useState<Links | null>(null);

  const fetchData = async (url: string) => {
    const res = await fetch(url);
    const links = fixLinks(res.headers.get('link'));
    setPages(parseLinkHeader(links));
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchData(`${url}?_page=1&_limit=${limit}`);
  }, [url, limit]);

  return [data, pages, fetchData];
};

export default usePageinatedApi;
