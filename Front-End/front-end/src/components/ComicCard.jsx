import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function ComicCard(comic) {
    const [heart, setHeart] = useState(true)

    const toggleImage = () =>{
        setHeart(!heart);
    }
        
    return (
        <div>
            {/* <img
                className = "heart" 
                src={heart ? 'assets/images/empty_heart.png' : 'assets/images/red_heart.png'}
                alt="favorites"
                onClick={toggleImage}
            /> */}
            <Link
                to={`/comics/${comic.id}`}
                style={{ textDecoration: 'none' }}
            >
                <div className="comicCard">
                    <img
                    className="comicCard_image"
                    src={`${comic.comic.thumbnail.path}.${comic.comic.thumbnail.extension}`}
                    alt="comic"
                    />
                    <div className="comicCard_line"></div>
                    <div className="comicCard_title">{comic.comic.title}</div>
                    <div className="comicCard_description">{comic.comic.description}</div>
                </div>
            </Link>
        </div>
    )
}
