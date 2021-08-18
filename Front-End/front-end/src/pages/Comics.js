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

    for(let i = 1; i<= Math.ceil(allComics.length/itemsPerPage); i++){
        pages.push(i);
    };

    const indexOfLastItem = currentPage*itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = allComics.slice(indexOfFirstItem,indexOfLastItem);

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
        <div className="comics">
            <Nav/>
            <div className="comics_title">
                <p style={{color : '#ef2c1f'}}>ALL</p>
                <p style={{color : 'white'}}>COMICS</p>
                <input placeholder="Entrez le titre d'un comic"/>
            </div>
            <div className="comics_line"></div>
            <div className="comics_display">
                {currentItems.map((comic, index) => (
                <div key={index}>
                    <ComicCard comic={comic} />
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
