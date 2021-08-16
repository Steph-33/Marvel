import React from 'react'
import {Link} from 'react-router-dom'

export default function ComicCard(comic) {
    console.log('comic===========>',comic)
    
    return (
        <div>
            <Link
                to={`/comics/${comic.id}`}
                style={{ textDecoration: 'none' }}
            >
                <div className="comicCard">
                    <img
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
