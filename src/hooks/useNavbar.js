import { useEffect } from 'react'
import $ from 'jquery'

export const useNavbar = () => {
    useEffect(() => {
        const $navbar = $('.navbar')
        const $window = $(window)

        // Toggle navbar menu
        $navbar.on('click', '.navbar-toggler', function () {
            $('.navbar .bg').slideToggle()
        })

        // Navbar scroll effect
        const handleScroll = () => {
            const bodyScroll = $window.scrollTop()
            const navbar = $('.navbar-chang')

            if (bodyScroll > 300) {
                navbar.addClass('nav-scroll')
            } else {
                navbar.removeClass('nav-scroll')
            }
        }

        $window.on('scroll', handleScroll)

        return () => {
            $window.off('scroll', handleScroll)
            $navbar.off('click', '.navbar-toggler')
        }
    }, [])
}
