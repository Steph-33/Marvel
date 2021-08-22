import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CharacterCard from '../components/CharacterCard';
import ComicCard from '../components/ComicCard';

export default function Favorites() {
    // Récupération des Personnages favoris
    var favList = [{}];
    const getArray = JSON.parse(localStorage.getItem('favorites') || '0');
    for (let i = 0 ; i < getArray.length ; i++){
        let x = getArray[i];
        favList[i] = JSON.parse(localStorage.getItem(`Favorite Item ${[x]}`) || '');
    }

    // Récupération des Comics favoris
    var favComicsList = [{}];
    const getComicsArray = JSON.parse(localStorage.getItem('favorite comics') || '0');
    for (let i = 0 ; i < getComicsArray.length ; i++){
        let x = getComicsArray[i];
        favComicsList[i] = JSON.parse(localStorage.getItem(`Favorite Item ${[x]}`) || '');
    }
    
    return (
        <>
        <div className="favorites">
            <Nav/>
            <div className="favorites_title">
                <p style={{color : '#ef2c1f'}}>ALL</p>
                <p style={{color : 'white'}}>YOUR FAVORITES</p>
            </div>
            <div className="favorites_line"></div>
            <div className="favorites_display">
                {favList.map((items, i) => (
                <div key={i}>
                    {(Object.values(favList[i])).map((value, key)=> 
                    <div key={key}>
                        <CharacterCard character={value} />
                    </div>
                    )}
                </div>
                ))}
                {favComicsList.map((items, i) => (
                <div key={i}>
                    {(Object.values(favComicsList[i])).map((value, key)=> 
                    <div key={key}>
                        <ComicCard comic={value} />
                    </div>
                    )}
                </div>
                ))}
            </div>
            
        </div>
        <Footer/>
        </>
    )
}
