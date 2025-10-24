import { useEffect } from 'react'
import $ from 'jquery'

// ✅ Make jQuery available globally BEFORE loading the plugin
if (typeof window !== 'undefined') {
    window.jQuery = window.$ = $
}

// ✅ Import plugin dynamically AFTER jQuery is available
export const useScrollIt = () => {
    useEffect(() => {
        import('../assets/js/jquery.scrollIt.js')
            .then(() => {
                if (typeof $.scrollIt === 'function') {
                    $.scrollIt({
                        upKey: 38,
                        downKey: 40,
                        easing: 'ease-in-out',
                        scrollTime: 600,
                        activeClass: 'active',
                        topOffset: 0,
                    })
                    console.log('✅ ScrollIt initialized successfully')
                } else {
                    console.warn('⚠️ ScrollIt plugin loaded but $.scrollIt not found')
                }
            })
            .catch((err) => {
                console.error('❌ Failed to load ScrollIt plugin:', err)
            })
    }, [])
}
