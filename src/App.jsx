import { useEffect } from 'react'
import { gsap } from 'gsap'
import Layout from './components/layout/Layout'
import Header from './components/sections/Header'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'
import Contact from './components/sections/Contact'
import { initAnimations } from './utils/animations'
import GsapTest from "./components/sections/GsapTest.jsx";

function App() {
    useEffect(() => {
        initAnimations()
    }, [])

    return (
        <Layout>

            <Header />
            <About />
            <Services />
            <Portfolio />
            <Contact />
        </Layout>
    )
}

export default App
