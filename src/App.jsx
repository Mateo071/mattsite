import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Services from './pages/Services'
import Schedule from './pages/Schedule'
import Contact from './pages/Contact'

function App() {

  return (
    <main className='bg-slate-300/20 h-full'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
