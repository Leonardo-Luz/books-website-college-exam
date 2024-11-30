

import { useNavigate } from 'react-router-dom'
import { MyList } from '../service/myList.service'
import '../styles/card.style.css'


export const BookCard = ( params ) => {
    const navigate = useNavigate();

    const addToListHandler = () => 
        !MyList.isFavorite(params.book.id) &&
            MyList.addBook(params.book)

    const removeOfListHandler = () => {
        if(MyList.isFavorite(params.book.id)){
            MyList.removeBook(params.book.id)
            navigate('/my_books');
        }
    }

    return (
        <div className="card-container" key={params.book.id}>
            <img src={params.book.volumeInfo.imageLinks ? params.book.volumeInfo.imageLinks.smallThumbnail : '#'} alt={`Image of the book ${params.book.volumeInfo.title}`} />
            <div className="card-data">
                <p>{'Titulo: ' + String(params.book.volumeInfo.title)}</p>
                <p>{'Autores: ' + String(params.book.volumeInfo.authors)}</p>
                {
                    params.book.volumeInfo.industryIdentifiers && params.book.volumeInfo.industryIdentifiers.map( isbn => (
                        <p>
                            {
                              isbn.type + ": " + isbn.identifier  
                            }
                        </p>
                    ))
                }
            </div>
            {
                !MyList.isFavorite(params.book.id) ?
                <button className='card-button' onClick={addToListHandler}>Adicionar à minha lista</button> :
                <button className='card-button' onClick={removeOfListHandler}>Remove da minha lista</button>
            }
        </div>
    )
}
