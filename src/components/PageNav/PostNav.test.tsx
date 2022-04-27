import { screen, render } from '@testing-library/react';
import { PostContext } from '../../App';
import PostNav from './PostNav';

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
  pages: {
    first: {
      url: 'https://test.com/next',
      rel: 'first',
    },
    last: {
      url: 'https://test.com/last',
      rel: 'last',
    },
    next: {
      url: 'https://test.com/next',
      rel: 'next',
    },
    prev: {
      url: 'https://text.com/prev',
      rel: 'prev',
    },
  },
  getPage: async (url: string) => {},
};

jest.mock('../../hooks/usePaginatedApi.ts', () => {
  return jest.fn(() => [
    postContext.posts,
    postContext.pages,
    postContext.getPage,
  ]);
});

const renderPostNav = () => {
  return render(
    <PostContext.Provider value={postContext}>
      <PostNav />
    </PostContext.Provider>
  );
};

test('renders all buttons', () => {
  renderPostNav();
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(4);
});

test('renders buttons with correct lables', () => {
  renderPostNav();

  const firstButton = screen.getByText(/first/i);
  const lastButton = screen.getByText(/last/i);
  const nextButton = screen.getByText(/next/i);
  const prevButton = screen.getByText(/prev/i);

  expect(firstButton).toBeInTheDocument();
  expect(lastButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();
  expect(prevButton).toBeInTheDocument();
});
