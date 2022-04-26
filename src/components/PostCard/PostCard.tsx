import { Post } from '../../types';
import styles from './PostCard.module.css';

interface Props {
  post: Post;
}
const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.body}>{post.body}</p>
    </div>
  );
};

export default PostCard;
