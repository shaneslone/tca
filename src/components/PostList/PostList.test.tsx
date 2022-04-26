import { render, screen } from '@testing-library/react';
import { PostContext } from '../../App';
import PostsList from './PostsList';

const postContext = {
  posts: [
    {
      id: 1,
      userId: 1,
      title: 'Test Title 1',
      body: 'Test Body 1',
    },
    {
      id: 2,
      userId: 1,
      title: 'Test Title 2',
      body: 'Test Body 2',
    },
  ],
  pages: null,
  getPage: async (url: string) => {},
};

jest.mock('../../hooks/usePaginatedApi.ts', () => {
  return jest.fn(() => [
    postContext.posts,
    postContext.pages,
    postContext.getPage,
  ]);
});

const renderPostList = () => {
  return render(
    <PostContext.Provider value={postContext}>
      <PostsList />
    </PostContext.Provider>
  );
};

test('Renders the post list', () => {
  renderPostList();
  const firstPost = screen.getByText(/test title 1/i);
  const secondPost = screen.getByText(/test title 2/i);
  expect(firstPost).toBeInTheDocument();
  expect(secondPost).toBeInTheDocument();
});
