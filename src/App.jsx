import { Outlet } from 'react-router-dom'
import { Footer } from './components/Footer.component'
import { Nav } from './components/Nav.component'

import './App.css'

function App() {

  return (
    <div className='app-body'>
      <Nav />

      <Outlet />

      <Footer />
    </div>
  )
}

export default App
