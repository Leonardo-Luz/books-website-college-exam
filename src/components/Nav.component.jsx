import { NavLink } from "react-router-dom"

import '../styles/nav.style.css'

export const Nav = () => {
    return(
        <div className="nav-container" >
            <NavLink to='/'>Busca</NavLink>
            <NavLink to='/my_books'>Meus Livros</NavLink>
        </div>
    )
}