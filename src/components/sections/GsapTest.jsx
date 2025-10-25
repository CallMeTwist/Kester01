import React, { useEffect } from 'react'
import { gsap } from 'gsap'

export default function GsapTest() {
    useEffect(() => {
        console.log('GSAP:', typeof gsap)
        gsap.to('h2', { x: 100, duration: 1 })
    }, [])

    return <h2>GSAP Test</h2>
}
