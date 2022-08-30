import { useState, useEffect, useContext } from 'react';
import { GifsContext } from '../context/GifsContext';
import { getGifs } from '../services/getGifs';



export const useGifs = ({ keyword } = { keyword: null }) => {
    const [loading, setLoading] = useState(false);
    const { gifs, setGifs } = useContext(GifsContext);

    useEffect(() => {
        setLoading(true);

        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

        if (keyword) localStorage.setItem('lastKeyword', keyword)
        getGifs({ keyword: keywordToUse }).then((gifs) => {
            setGifs(gifs);
            setLoading(false);
        });
    }, [keyword, setGifs]);

    return { loading, gifs };

}