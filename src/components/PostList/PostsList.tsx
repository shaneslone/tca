import { useContext } from 'react';
import { PostContext } from '../../App';
import PostNav from '../PageNav/PostNav';
import PostCard from '../PostCard/PostCard';
import styles from './PostList.module.css';

const PostsList = () => {
  const posts = useContext(PostContext).posts;

  return (
    <div className={styles.list}>
      <PostNav />
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
      <PostNav />
    </div>
  );
};

export default PostsList;
