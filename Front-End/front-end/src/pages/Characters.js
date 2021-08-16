import React, {useState,useEffect} from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';

export default function Characters() {
    const [allCharacters, setAllCharacters] = useState([]);

    useEffect(() => {
        const getCharacters = async () => {
        try {
            const response = await axios.get(
            'http://localhost:8080/api/characters/'
            );
            setAllCharacters(response.data.data.results);

            console.log('response =======>', response)
        } catch (error) {
            console.error(error);
        }
        };
    getCharacters();
    }, []);
    return (
        <div className="characters">
            <Nav/>
            <div className="characters_title">
                <p style={{color : '#ef2c1f'}}>ALL</p>
                <p style={{color : 'white'}}>CHARACTERS</p>
            </div>
            <div className="characters_line"></div>
            <div className="characters_display">
                {allCharacters.map((character, index) => (
                <div key={index}>
                    <CharacterCard character={character} />
                </div>
                ))}
            </div>
            <Footer/>
        </div>
    )
}
