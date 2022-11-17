import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import MainPage from './Pages/MainPage'
import ProjectPage from './Pages/ProjectPage'
function App() {
  return (
    <div>
       <BrowserRouter>
            <Routes>
                <Route path = '/' element= {<MainPage/>} />
                <Route path='/about' element= {<AboutPage/>}/>
                <Route path='/projects' element={<ProjectPage/>}/>
                <Route path='/contact' element={<ContactPage/>}/>
            </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App