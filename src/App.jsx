import './App.css'
import Navbar from './component/navbar'
import { Routes, Route } from 'react-router-dom'
import Four04 from './page/404'
import Home from './page/Home'
import About from './page/About'
import Project from './page/Project'
import Contact from './page/contact'

function App() {

  return (
    <div className="App bg-white text-dark ">
      <Navbar />
      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path='*' element={<Four04 />} />
      </Routes>
    </div>
  )
}

export default App
