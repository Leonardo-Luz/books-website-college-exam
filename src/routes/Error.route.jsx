import { Link } from "react-router-dom"

// import '../styles/error.style.css'

export const Error = () => {
    return(
        <div className="error-container">
            <h1>Page not Found!</h1>
            <Link to={'/'}>Voltar para Home page.</Link>
        </div>
    )
}