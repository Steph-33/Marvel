import React, {useState, useEffect} from 'react'

function Pagination(items) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [pages, setPages] = useState([]);

    useEffect(() => {
        const renderPages = () =>{
            setPages([]);
            for(let i = 1; i<= Math.ceil(items.items.length/itemsPerPage); i++){
            setPages(...pages, i);
            };
            return pages;
        }
        // console.log('pages==========>',pages)
       return setPages(renderPages());
       
    }, [items, itemsPerPage, pages])

    const renderPageNumbers = () => { 
        console.log('pages==========>',pages)
        // pages.map(number => {
        // return (
        //     <h1 key={number} id={number}>
        //         {number}
        //     </h1>
        // )
        // });
        pages.map((page) => {
            return (
                    <h1 key={page} id={page}>
                        {page}
                    </h1>
                )
        })
    }

    return (
        <div>
           <ul className="pageNumbers">
                {renderPageNumbers()}
            </ul> 
        </div>
    )
}

export default Pagination
