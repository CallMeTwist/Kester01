import React, { useEffect } from 'react'
import Loader from '../common/Loader'
import Cursor from '../common/Cursor'
import ProgressScroll from '../common/ProgressScroll'
import Navbar from '../common/Navbar'
import { useScrollIt } from '../../hooks/useScrollIt'
import { initRollingText } from '../../utils/animations'

const Layout = ({ children }) => {
    useScrollIt()

    useEffect(() => {
        // Body "loaded" animation
        const body = document.body
        body.classList.add('loaded')
        setTimeout(() => {
            body.classList.remove('loaded')
        }, 1500)

        // Initialize rolling text after render
        setTimeout(() => {
            initRollingText()
        }, 100)
    }, [])

    return (
        <>
            <Loader />
            <Cursor />
            <ProgressScroll />
            <Navbar />
            <main>{children}</main>
        </>
    )
}

export default Layout
