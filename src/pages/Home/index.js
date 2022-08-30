import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useGifs } from '../../hooks/useGifs';
import { GifList } from '../../components/GifList/GifList';

import './Home.css';

const GIFS_POPULARES = ['Cats', 'Colombia', 'Rick', 'Morty', 'Panda', 'Football'];

const Home = () => {
	const [keyword, setKeyword] = useState();
	const [path, pushLocation] = useLocation();
	const { loading, gifs } = useGifs();
	console.log(path);

	const handleSubmit = (event) => {
		event.preventDefault();
		pushLocation(`/search/${keyword}`);
	}

	const handleChange = (event) => {
		setKeyword(event.target.value);
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input placeholder="search a gif here..." type="text" value={keyword} onChange={handleChange} />
				<button type="submit">Search</button>
			</form>
			<h2>The Latest Search</h2>
			<GifList gifs={gifs} />


			<h2>The Most Popular Gifs</h2>

			<div className="home_menu">
				{GIFS_POPULARES.map((gifPopular, index) =>
					<Link
						key={index}
						to={`/search/${gifPopular}`}>
						{gifPopular}
					</Link>
				)}
			</div>
		</>
	);
};

export default Home;
