import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Services from './pages/Services'
import Schedule from './pages/Schedule'
import Contact from './pages/Contact'

import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const App = () => {

  const firebaseConfig = {
    apiKey: "AIzaSyB7kZPQUR0T3Qe7Bh-AblcPZKO4vGq6nSA",
    authDomain: "mattsite-faa5b.firebaseapp.com",
    projectId: "mattsite-faa5b",
    storageBucket: "mattsite-faa5b.appspot.com",
    messagingSenderId: "121870305131",
    appId: "1:121870305131:web:2a472f4248c03d06a8ae2e",
    measurementId: "G-BP0JZ2M73G"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

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
