import { FC } from 'react';
import styles from '@/styles/layout.module.scss';

const Layout: FC = ({ children }) => {
	return (
		<>
			<main className={styles.layout}>{children}</main>
		</>
	);
};

export { Layout };
