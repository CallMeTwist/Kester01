import {gsap} from 'gsap'
import WOW from 'wow.js'
import Splitting from 'splitting'

export const initAnimations = () => {
    const wow = new WOW({
        animateClass: 'animated',
        offset: 100,
    })
    wow.init()

    Splitting()

    const svg = document.getElementById('svg')
    if (svg) {
        const tl = gsap.timeline()
        const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z"
        const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z"

        tl.to('.loader-wrap-heading .load-text, .loader-wrap-heading .cont', {
            delay: 1.5,
            y: -100,
            opacity: 0,
        })
        tl.to(svg, {
            duration: 0.5,
            attr: { d: curve },
            ease: 'power2.easeIn',
        }).to(svg, {
            duration: 0.5,
            attr: { d: flat },
            ease: 'power2.easeOut',
        })
        tl.to('.loader-wrap', { y: -1500 })
        tl.to('.loader-wrap', { zIndex: -1, display: 'none' })
    }
}

export const initRollingText = () => {
    const elements = document.querySelectorAll('.rolling-text')

    elements.forEach((element) => {
        const innerText = element.innerText
        element.innerHTML = ''

        const textContainer = document.createElement('div')
        textContainer.classList.add('block')

        for (const letter of innerText) {
            const span = document.createElement('span')
            span.innerText = letter.trim() === '' ? '\xa0' : letter
            span.classList.add('letter')
            textContainer.appendChild(span)
        }

        element.appendChild(textContainer)
        element.appendChild(textContainer.cloneNode(true))
    })

    elements.forEach((element) => {
        element.addEventListener('mouseover', () => {
            element.classList.remove('play')
        })
    })
}
