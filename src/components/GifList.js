import { useState, useEffect } from 'react';
import { getGifs } from '../services/getGifs';
import { Gif } from './Gif';

export const GifList = ({ params }) => {
	const [gifs, setGifs] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		getGifs({ keyword: params.keyword }).then((gifs) => {
			setGifs(gifs);
			setLoading(false);
		});
	}, [params.keyword]);

	if (loading) return <i>Loading ⭕️</i>;

	return (
		<div>
			{gifs.map(({ title, id, url }) => (
				<Gif
					key={id}
					title={title}
					id={id}
					url={url}
				/>
			))}
		</div>
	);
};
