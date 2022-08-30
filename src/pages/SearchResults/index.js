import { GifList } from '../../components/GifList/GifList';
import { Loading } from '../../components/Loading/Loading';
import { useGifs } from '../../hooks/useGifs';

export const SearchResults = ({ params }) => {
	const { keyword } = params;
	const { loading, gifs } = useGifs({ keyword });

	return <>{
		loading
			? <Loading />
			: <GifList gifs={gifs} />
	}</>

};
