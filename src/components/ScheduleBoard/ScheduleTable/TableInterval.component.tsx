import React, { useState } from 'react'
import BookingButton from '../BookingButton.component'

const TableInterval = () => {
    const [ show, setShow ] = useState(false)
    return (
        <div className="cell"
            onMouseEnter={ () => setShow(true) }
            onMouseLeave={ () => setShow(false) }
            >
                { show && <BookingButton/> }
        </div>
    )
}

export default TableInterval
