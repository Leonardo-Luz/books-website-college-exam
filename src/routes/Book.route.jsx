import { Link, useParams } from "react-router-dom"
import { BookCard } from "../components/bookCard.component"
import { MyList } from "../service/myList.service"

export const Book = () => {
    const { id } = useParams()

    return(
        <>
            <h1>Detalhes do Livro</h1>
            {
                <BookCard  book={MyList.getBook(id)} />
            }
            <Link to={-1}>Voltar</Link>        
        </>
    )
}