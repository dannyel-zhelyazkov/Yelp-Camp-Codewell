import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import styles from '@/styles/landing-page.module.scss';
import { MainButton } from '@/src/generics/buttons';

const Home: NextPage = () => {
	const { push } = useRouter();

	return (
		<div className={styles.container}>
			<div className={styles.explore}>
				<img src="svg/logo.svg" alt="Yelp Camp logo" className={styles.logo} />

				<h1 className={styles.header}>Explore the best camps on Earth.</h1>
				<p className={styles.description}>
					YelpCamp is a curated list of the best camping spots on Earth.
					Unfiltered and unbiased reviews.
				</p>
				<ul className={styles.pros}>
					<li>Add your own camp suggestion.</li>
					<li>Leave reviews and experiences.</li>
					<li>See locations for all camps.</li>
				</ul>
				<MainButton
					handleClick={() => {
						push('/campgrounds/search');
					}}>
					View Campgrounds
				</MainButton>
				<div className={styles.partners}>
					<p>Partnered with:</p>
					<ul className={styles.partnersList}>
						<li>
							<img src="svg/airbnb.svg" alt="airbnb logo" />
						</li>
						<li>
							<img src="svg/booking.svg" alt="Booking.com logo" />
						</li>
						<li>
							<img src="svg/plum-guide.svg" alt="Plum Guide logo" />
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.hero} />
		</div>
	);
};

export default Home;
