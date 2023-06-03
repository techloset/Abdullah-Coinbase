import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from "./components/landingPage/Landingpge";
import About from "./components/aboutPage/Aboutpage";
import Blog from "./components/blogPage/Blogpage";
import Bcontent from "./components/blogContent/B.pgecontent";
import Header from './components/Header';
import Footer from './components/Footer';
export default function Nav() {
  return (
<BrowserRouter>
<Header/>
<Routes>
<Route path='/' element={ <Landing />}/>
<Route path='about' element={ <About />}/>
<Route path='blog' element={ <Blog />}/>
<Route path='contact' element={ <Bcontent />}/>
</Routes>
<div className="sm:mt-[100px] mt-[200px]">
          <Footer />
        </div>
</BrowserRouter>
  )
}
