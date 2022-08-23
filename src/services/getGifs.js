const apiKey = 'k8xyFxYcBSbQhLLYlOfHIkMYvVbaC3YV';

export const getGifs = ({ keyword = 'morty' }) => {
	const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
	return fetch(apiURL)
		.then((res) => res.json())
		.then((res) => {
			const { data } = res;
			const gifs = data.map((image) => {
				const { images, title, id } = image;
				const { url } = images.downsized_medium;
				return { title, id, url };
			});
			return gifs;
		});
};
