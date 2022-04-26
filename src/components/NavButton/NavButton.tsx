import { ReactNode, useContext } from 'react';
import { PostContext } from '../../App';
import styles from './NaveButton.module.css';

interface Props {
  url: string;
  children?: ReactNode;
}

const NavButton: React.FC<Props> = ({ url, children }) => {
  const getPage = useContext(PostContext).getPage;

  const handleClick = () => {
    getPage(url);
  };
  return (
    <button onClick={handleClick} className={styles.button}>
      {children}
    </button>
  );
};

export default NavButton;
