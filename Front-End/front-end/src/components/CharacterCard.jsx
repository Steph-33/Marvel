import React from 'react'
import {Link} from 'react-router-dom'

export default function CharacterCard(character) {
    console.log('character===========>',character)
    console.log(character.character.name)
    return (
        <div>
            <Link
                to={`/characters/${character.id}`}
                style={{ textDecoration: 'none' }}
            >
                <div className="characterCard">
                    <img
                    src={`${character.character.thumbnail.path}.${character.character.thumbnail.extension}`}
                    alt="character"
                    />
                    <div className="characterCard_line"></div>
                    <div className="characterCard_name">{character.character.name}</div>
                    <div className="characterCard_description">{character.character.description}</div>
                </div>
            </Link>
        </div>
    )
}
