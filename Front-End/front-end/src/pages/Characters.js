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

    /////// Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);

    const [pageNumberLimit, setPageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const pages =[];

    for(let i = 1; i<= Math.ceil(allCharacters.length/itemsPerPage); i++){
        pages.push(i);
    };

    const indexOfLastItem = currentPage*itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = allCharacters.slice(indexOfFirstItem,indexOfLastItem);

    const renderPageNumbers = pages.map(number =>{
        if(number < maxPageNumberLimit+1 && number > minPageNumberLimit){
            return (
                <li 
                key={number} 
                id={number} 
                onClick={handleClick}
                className={currentPage === number ? "active" : null}
                >
                    {number}
                </li>
            )
        } else {
            return null;
        }
    });

    const handlePreviousBtn = () => {
        setCurrentPage(currentPage-1);

        if((currentPage-1)%pageNumberLimit === 0){
            setMaxPageNumberLimit (maxPageNumberLimit-pageNumberLimit);
            setMinPageNumberLimit (minPageNumberLimit-pageNumberLimit);
        }
    };

    const handleNextBtn = () => {
        setCurrentPage(currentPage+1);

        if(currentPage+1 > maxPageNumberLimit){
            setMaxPageNumberLimit (maxPageNumberLimit+pageNumberLimit);
            setMinPageNumberLimit (minPageNumberLimit+pageNumberLimit);
        }
    };

    let pageIncrementBtn = null;
    if(pages.length>maxPageNumberLimit){
        pageIncrementBtn = <li onClick={handleNextBtn}>&hellip;</li>
    };

    let pageDecrementBtn = null;
    if(minPageNumberLimit >= 1){
        pageDecrementBtn = <li onClick={handlePreviousBtn}>&hellip;</li>
    };
    /////// Fin pagination

    return (
        <div className="characters">
            <Nav/>
            <div className="characters_title">
                <p style={{color : '#ef2c1f'}}>ALL</p>
                <p style={{color : 'white'}}>CHARACTERS</p>
                <input placeholder="Entrez le nom d'un personnage"/>
            </div>
            <div className="characters_line"></div>
            <div className="characters_display">
                {currentItems.map((character, index) => (
                <div key={index}>
                    <CharacterCard character={character} />
                </div>
                ))}
            </div>
            <ul className="pageNumbers">
                <li
                onClick={handlePreviousBtn}
                disabled = {currentPage === pages[0] ? true : false}
                >
                    <button>Previous</button>
                </li>
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}
                <li
                onClick={handleNextBtn}
                disabled = {currentPage === pages[pages.length-1] ? true : false}
                >
                    <button>Next</button>
                </li>
            </ul> 
            <Footer/>
        </div>
    )
}
