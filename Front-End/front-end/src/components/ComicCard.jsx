import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {IoIosHeart, IoIosHeartEmpty} from 'react-icons/io';

export default function ComicCard(comic) {
    const [favoriteComics, setFavoriteComics] = useState([]);

    const addFavComic = (props) => {
        
        // Code pour pousser les infos dans le localStorage
        let array = favoriteComics
        let addArray = true;
        array.map((item, key) => {
            if(item === props.comic.id){
                array.splice(key, 1);
                addArray = false;
            }
        });
    /////////// Push des id dans le tableau favorites sur le localStorage /////////////////
    ////////// Problème : le tableau se réinitialise à chaque push //////////////    
        if(addArray){
            array.push(props.comic.id);
        }
        setFavoriteComics([...array]);
        localStorage.setItem('favorite comics', JSON.stringify(favoriteComics));

    /////////// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ /////////////////////
        
        var storage = localStorage.getItem(`Favorite Item ${props.comic.id}` || '0');
        if (storage == null) {
            localStorage.setItem(`Favorite Item ${props.comic.id}`, JSON.stringify(props));
        } 
        else{
            localStorage.removeItem(`Favorite Item ${props.comic.id}`);
        }
    };
        
    return (
        <div>
            <div  >
                {favoriteComics.includes(comic.comic.id) ? (
                    <IoIosHeart
                    className="heart"
                    onClick={() => addFavComic(comic)}
                    style={{color:'red'}}
                    />
                ):(
                    <IoIosHeartEmpty
                    className="heart"
                    onClick={() => addFavComic(comic)}
                    style={{color:'red'}}
                    />
                )}
            </div>
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
