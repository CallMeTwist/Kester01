import { useEffect } from 'react'
import $ from 'jquery'

export const useProgressScroll = () => {
    useEffect(() => {
        const progressPath = document.querySelector('.progress-wrap path')
        if (!progressPath) return

        const pathLength = progressPath.getTotalLength()
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none'
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength
        progressPath.style.strokeDashoffset = pathLength
        progressPath.getBoundingClientRect()
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear'

        const updateProgress = () => {
            const scroll = $(window).scrollTop()
            const height = $(document).height() - $(window).height()
            const progress = pathLength - (scroll * pathLength / height)
            progressPath.style.strokeDashoffset = progress
        }

        updateProgress()
        $(window).scroll(updateProgress)

        const offset = 150
        const duration = 550

        $(window).on('scroll', function () {
            if ($(this).scrollTop() > offset) {
                $('.progress-wrap').addClass('active-progress')
            } else {
                $('.progress-wrap').removeClass('active-progress')
            }
        })

        $('.progress-wrap').on('click', function (event) {
            event.preventDefault()
            $('html, body').animate({ scrollTop: 0 }, duration)
            return false
        })

        return () => {
            $(window).off('scroll', updateProgress)
            $('.progress-wrap').off('click')
        }
    }, [])
}
