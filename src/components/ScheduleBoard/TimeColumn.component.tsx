import React from 'react'

import Intervals from './Intervals.component'

export interface ITimeColumnProps {
    hours: Array<number>,
    intervals: Array<number>
}

const TimeColumn: React.FC<ITimeColumnProps> = ({ hours, intervals }) => {
    return (
        <div className="scheduler-timecolumn">
            {
                hours.map(hour => (
                    <div className="scheduler-hour">
                        {hour}
                        <Intervals intervals={intervals}/>
                    </div>
                ))
            }
        </div>
    )
}

export default TimeColumn
