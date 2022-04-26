import { render, screen } from '@testing-library/react';
import { Post } from '../../types';
import PostCard from './PostCard';

const testPost: Post = {
  userId: 1,
  id: 1,
  title: 'Test Post',
  body: 'Test Body.',
};

test('Render a post', () => {
  render(<PostCard post={testPost} />);
  const title = screen.getByText(/test post/i);
  const body = screen.getByText(/test body./i);
  expect(title).toBeInTheDocument();
  expect(body).toBeInTheDocument();
});
