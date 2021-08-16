import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ComicCard from '../components/ComicCard';

export default function CharactersComics() {
    let location = useLocation();
    const [charactersComics, setCharactersComics] = useState([]);
    let {id} = useParams();
    
    useEffect(() => {
        const getCharactersComics = async() =>{
            try {
              const response = await axios.get(
                `http://localhost:8080/api/characters/${id}/comics`
              );
              console.log("CharactersComicsResponse ========>",response.data.data.results)
              
              setCharactersComics(response.data.data.results);
              
            } catch (error) {
              console.error(error);
            }
        };
        getCharactersComics();
    }, [id]);
   
    return (
        <div className="charactersComics">
           <Nav/>
           <div className="charactersComics_title">
                <p style={{color : '#ef2c1f'}}>ALL</p>
                <p style={{color : 'white'}}>{location.state.characterName}'S</p>
                <p style={{color : 'white'}}>COMICS</p>
            </div>
            <div className="charactersComics_specialLine"></div>
           <div className="charactersComics_display">
                {charactersComics.map((comic, index) => (
                <div key={index}>
                    <ComicCard comic={comic} />
                </div>
                ))}
            </div>
            <Footer/> 
        </div>
    )
}
