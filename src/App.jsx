import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Courses from './Pages/Courses'
import CoursesDetails from './Pages/CoursesDetails'
import NavBar2 from './components/navbar2'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <NavBar2 />

      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/About' element={<About />}/> 
        <Route path='/Contact' element={<Contact />}/>
        <Route path='Courses' element={<Courses />}/>
        <Route path='/Courses/:id' element={<CoursesDetails />}/>
        <Route path='/Product' element={<Product />}>
          <Route path='Men' element={<Men />}/>
        <Route path='Women' element={<Women />}/>
        
        </Route>
        <Route path='*' element={<NotFound />}/> 
      </Routes>
      <Footer />
    </div>
  )
}

export default App