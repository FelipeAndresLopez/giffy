import React from 'react';
import { Gif } from '../Gif/Gif';
import './styles.css';

export const GifList = ({ gifs }) => {
    return (
        <>
            {gifs.map(({ title, id, url }) => (
                <Gif
                    key={id}
                    title={title}
                    id={id}
                    url={url}
                />
            ))}
        </>
    );
}

