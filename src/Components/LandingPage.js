import React from 'react'
import About from './About'
import Blogs from './Blogs'
import Contact from './Contact'
import Footer from './Footer'
import Home from './Home'

function LandingPage() {
    return (
        <div>
            <Home/>
            <About/>
            <Blogs/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default LandingPage
