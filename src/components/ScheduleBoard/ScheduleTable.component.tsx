import React from 'react'
import TimeColumn, { ITimeColumnProps } from './TimeColumn.component'
import ScheduleCell from './ScheduleCell.component'

const ScheduleTable: React.FC<ITimeColumnProps> = ({ hours, intervals }) => {
    const sheduleCellsInterval = 
        <div className="scheduler-cells">
            {
                intervals.map(i => (
                    <ScheduleCell />
                ))
            }
        </div>
    return (
        <div className="scheduler-table underlined">
            <TimeColumn hours={hours} intervals={intervals}/>
            {
                // hours.map(h => (
                   
                // ))
            }
        </div>
    )
}

export default ScheduleTable
