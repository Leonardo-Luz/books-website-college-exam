import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { BookCard } from "../components/bookCard.component";
import { service } from "../service/api.service";

import '../styles/found.style.css'

export const BooksFound = () => {
    const { search, tipo } = useParams();

    const [ books, setBooks ] = useState();

    const searchHandler = async () => {
        const response = await service.get('/volumes', {
            params: {
                q: `${tipo}:${search}`
            }
        })

        setBooks(response.data)
    }

    useEffect(() => {
        searchHandler();
    }, [])

    return(
        <>
            <h1>Livros encontrados:</h1>
            <div className="found-books-container">
                {
                    books ? books.totalItems > 0 ?
                        books.items.map( book => <BookCard book={book} />): <h1 className="book-not-found">Nenhum livro Encontrado</h1> :
                    <p>Loading...</p>
                }
            </div>
        </>
    )
}