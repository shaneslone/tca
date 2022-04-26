import { useContext } from 'react';
import { PostContext } from '../../App';
import NavButton from '../NavButton/NavButton';
import styles from './PostNav.module.css';

const PostNav = () => {
  const pages = useContext(PostContext).pages;

  if (!pages) return null;

  const pageKeys = Object.keys(pages);

  return (
    <div className={styles.container}>
      {pageKeys.map(key => (
        <NavButton key={key} url={pages[key].url}>
          {key}
        </NavButton>
      ))}
    </div>
  );
};

export default PostNav;
