import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import ContactPage from './pages/Contact'
import Menu from './pages/Menu'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/contact" element={<ContactPage />} />
           <Route path="/shop" element={<Menu />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
