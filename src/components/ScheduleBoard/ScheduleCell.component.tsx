import React, { useState } from 'react'
import BookingButton from './BookingButton.component'



const ScheduleCell: React.FC = () => {
    const [ show, setShow ] = useState(false)
    return (
        <div className="scheduler-table-cell underlined"
            onMouseEnter={ () => setShow(true) }
            onMouseLeave={ () => setShow(false) }
            >
                { show && <BookingButton/> }
        </div>
    )
}

export default ScheduleCell
