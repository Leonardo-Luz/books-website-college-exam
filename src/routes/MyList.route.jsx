import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { service } from "../service/api.service"
import { MyList } from "../service/myList.service"

import '../styles/list.style.css'

export const MyBooks = () => {

    return(
        <>
            <h1>Meus Livros:</h1>
            <div className="list-container">
            {
                MyList.getBooks() ? MyList.getBooks().length > 0 ?
                MyList.getBooks().map( book => <Link to={`/book_details/${book.id}`}>{String(book.volumeInfo.title)}</Link> ): <h1 className="book-not-found">Não há livros nos seus favoritos</h1> :
                <p>Loading...</p>
            }
            </div>
            <Link to={-1}>Voltar</Link>
        </>
    )
}