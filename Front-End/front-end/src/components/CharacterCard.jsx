import React from 'react';
import {useHistory} from 'react-router-dom';

export default function CharacterCard(character) {
    let history = useHistory();
    
    const goToCharactersComics = () => {
        return history.push({pathname : `/characters/${character.character.id}/comics`, state : {
            characterName : character.character.name
        }});
    }

    return (
        <div>
            <div className="characterCard" onClick={() => goToCharactersComics()}>
                <img
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
