import React from 'react';
import { Link } from 'wouter';

import './Home.css';

const GIFS_POPULARES = ['Cats', 'Colombia', 'Rick', 'Morty', 'Panda', 'Football'];

const Home = () => {
	return (
		<>
			<h2>The Most Popular Gifs</h2>
			<div className="home_menu">
				{GIFS_POPULARES.map(gifPopular =>
					<Link
						to={`/gif/${gifPopular}`}>
						{gifPopular}
					</Link>
				)}
			</div>
		</>
	);
};

export default Home;
