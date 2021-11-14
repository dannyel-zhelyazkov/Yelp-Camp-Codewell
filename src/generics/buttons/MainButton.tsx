import { FC } from 'react';
import styles from '@/styles/generics/main-button.module.scss';

interface MainButtonProps {
	handleClick: () => void;
}

const MainButton: FC<MainButtonProps> = ({ children, handleClick }) => {
	return (
		<button className={styles.mainButton} onClick={handleClick}>
			{children}
		</button>
	);
};

export { MainButton };
