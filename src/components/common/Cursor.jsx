import React from 'react'
import { useCursor } from '../../hooks/useCursor'

const Cursor = () => {
    useCursor()
    return <div className="cursor"></div>
}

export default Cursor
