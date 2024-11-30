import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react"
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();

    const searchBook = useRef();
    const [ tipoSearch, setTipoSearch ] = useState('Titulo');


    const radioHandler = (ev) => {
        setTipoSearch(ev.target.id)
    }

    const searchHandler = () => {
        if(searchBook.current.value.trim() == ''){
            alert('Busca inválida!');
            return;
        }

        navigate(`/books_found/${searchBook.current.value}/${tipoSearch}`)
    }

    return(
        <div>
            <h1>Busque o Livro:</h1>
            <div>
                <input 
                    ref={searchBook}
                    type="text" 
                />
                <input type="button" value="Buscar" onClick={searchHandler} />
            </div>
            <div className="choices">
                <label>
                    <input onClick={radioHandler} type="radio" name="tipo" id="isbn" /> ISBN 
                </label>
                <label>
                    <input onClick={radioHandler} type="radio" name="tipo" id="intitle" defaultChecked /> Titulo 
                </label>
                <label>
                    <input onClick={radioHandler} type="radio" name="tipo" id="inauthor" /> Autor 
                </label>
            </div>
        </div>
    )
}