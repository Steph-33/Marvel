import React, {useState, useEffect} from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import axios from 'axios';
import ComicCard from '../components/ComicCard';

export default function Comics() {
    const [allComics, setAllComics] = useState([]);

    useEffect(() => {
        const getComics = async () => {
        try {
            const response = await axios.get(
            'http://localhost:8080/api/comics/'
            );
            setAllComics(response.data.data.results);

            console.log('response =======>', response)
        } catch (error) {
            console.error(error);
        }
        };
    getComics();
    }, []);
    return (
        <div className="comics">
            <Nav/>
            <div className="comics_title">
                <p style={{color : '#ef2c1f'}}>ALL</p>
                <p style={{color : 'white'}}>COMICS</p>
                <input placeholder="Entrez le titre d'un comic"/>
            </div>
            <div className="comics_line"></div>
            <div className="comics_display">
                {allComics.map((comic, index) => (
                <div key={index}>
                    <ComicCard comic={comic} />
                </div>
                ))}
            </div>
            <Footer/>
        </div>
    )
}
