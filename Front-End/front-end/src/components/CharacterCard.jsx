import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

export default function CharacterCard(character) {
    const [heart, setHeart] = useState(true);
    const [favorites, setFavorites] = useState([]);
        
    let history = useHistory();
    
    const goToCharactersComics = () => {
        return history.push({pathname : `/characters/${character.character.id}/comics`, state : {
            characterName : character.character.name
        }});
    };

    const pushCharacterInLocalStorage = (props) => {
        
        // Méthode pour changer la couleur du coeur
        const toggleImage = () =>{
            setHeart(!heart);
        };
        toggleImage();

        // Code pour pousser les infos dans le localStorage
        let array = favorites;
        let addArray = true;
        array.map((item, key) => {
            if(item === props.character.id){
                array.splice(key, 1);
                addArray = false;
            }
        });

        if(addArray){
            array.push(props.i);
        }
        
        var storage = localStorage.getItem(`Favorite Item ${props.character.id}` || '0');
        if (storage == null) {
            localStorage.setItem(`Favorite Item ${props.character.id}`, JSON.stringify(props));
        } 
        else{
            localStorage.removeItem(`Favorite Item ${props.character.id}`);
        }
    }

    return (
        <div>
            <img
                className = "heart" 
                src={heart ? 'assets/images/empty_heart.png' : 'assets/images/red_heart.png'}
                alt="favorites"
                onClick={() => pushCharacterInLocalStorage(character)} 
            />
            <div className="characterCard" onClick={() => goToCharactersComics()}>
                <img
                className="characterCard_image"
                src={`${character.character.thumbnail.path}.${character.character.thumbnail.extension}`}
                alt="character"
                />
                <div className="characterCard_line"></div>
                <div className="characterCard_name">{character.character.name}</div>
                <div className="characterCard_description">{character.character.description}</div>
            </div>
        </div>
    )
}
