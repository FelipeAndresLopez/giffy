import React, { useContext } from 'react';
import { Gif } from '../../components/Gif/Gif';
import { GifsContext } from '../../context/GifsContext';
import { StaticContext } from '../../context/StaticContext';

export const GifDetails = ({ params }) => {
    const staticContext = useContext(StaticContext);
    console.log(staticContext);

    const { gifs } = useContext(GifsContext);
    const { id } = params;
    const gif = gifs.find((singleGif) => singleGif.id === id);
    return (
        <Gif {...gif} />
    );
}

