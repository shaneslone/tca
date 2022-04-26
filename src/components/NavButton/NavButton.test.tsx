import { render, screen } from '@testing-library/react';
import { PostContext } from '../../App';
import NavButton from './NavButton';

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

const renderButton = () => {
  return render(
    <PostContext.Provider value={postContext}>
      <NavButton url='https://www.testapi.com/next'>next</NavButton>
    </PostContext.Provider>
  );
};

test('Render nav button', () => {
  renderButton();
  const button = screen.getByText(/next/i);
  expect(button).toBeInTheDocument();
});

test('button is enabled', () => {
  renderButton();
  const button = screen.getByText(/next/i);
  expect(button).not.toBeDisabled();
});
