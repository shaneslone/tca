import { createContext } from 'react';
import './App.css';
import PostsList from './components/PostList/PostsList';
import usePageinatedApi from './hooks/usePaginatedApi';
import { Post, UsePaginatedApiData } from './types';

const defaultState = {
  posts: [],
  pages: null,
  getPage: async (url: string) => {},
};

export const PostContext = createContext<UsePaginatedApiData>(defaultState);

function App() {
  const [posts, pages, getPage] = usePageinatedApi<Post>(
    'https://jsonplaceholder.typicode.com/posts',
    20
  );

  return (
    <PostContext.Provider value={{ posts, pages, getPage }}>
      <div>
        <PostsList />
      </div>
    </PostContext.Provider>
  );
}

export default App;
