import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Error } from './routes/Error.route'
import { Home } from './routes/Home.route'
import { BooksFound } from './routes/BooksFound.route'
import { MyBooks } from './routes/MyList.route'
import { Book } from './routes/Book.route'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/books_found/:search/:tipo',
        element: <BooksFound />
      },
      {
        path: '/my_books',
        element: <MyBooks />
      },
      {
        path: '/book_details/:id',
        element: <Book />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
