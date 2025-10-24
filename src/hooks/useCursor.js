import { useEffect } from 'react'
import $ from 'jquery'

export const useCursor = () => {
    useEffect(() => {
        const cursor = document.querySelector('.cursor')

        const editCursor = (e) => {
            const { clientX: x, clientY: y } = e
            if (cursor) {
                cursor.style.left = x + 'px'
                cursor.style.top = y + 'px'
            }
        }

        const link = document.querySelectorAll('.hover-this')

        const animateit = function (e) {
            const hoverAnim = this.querySelector('.hover-anim')
            if (!hoverAnim) return

            const { offsetX: x, offsetY: y } = e
            const { offsetWidth: width, offsetHeight: height } = this
            const move = 25
            const xMove = (x / width) * (move * 2) - move
            const yMove = (y / height) * (move * 2) - move

            hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`
            if (e.type === 'mouseleave') hoverAnim.style.transform = ''
        }

        link.forEach((b) => {
            b.addEventListener('mousemove', animateit)
            b.addEventListener('mouseleave', animateit)
        })

        window.addEventListener('mousemove', editCursor)

        $('a, .cursor-pointer').hover(
            function () {
                $('.cursor').addClass('cursor-active')
            },
            function () {
                $('.cursor').removeClass('cursor-active')
            }
        )

        return () => {
            window.removeEventListener('mousemove', editCursor)
            link.forEach((b) => {
                b.removeEventListener('mousemove', animateit)
                b.removeEventListener('mouseleave', animateit)
            })
        }
    }, [])
}
