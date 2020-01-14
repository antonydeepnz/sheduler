import React from 'react'

import './SchedulerBoard.component.css'
import TimeColumn from './TimeColumn.component'
import Avatar, { IAvatarProps } from './Avatar.component'
import ScheduleTable from './ScheduleTable.component'

interface ISchedulerBoardProps {
    hours: Array<number>,
    intervals: Array<number>
    avatars: Array<IAvatarProps>
}

const SchedulerBoard: React.FC<ISchedulerBoardProps> = ({ hours, intervals, avatars }) => {
    const avatarList = 
        <div className="scheduler-avatar-list">
            {
                avatars.map(item => (
                    <Avatar name={item.name} src={item.src} speciality={item.speciality}/>
                ))
            }
        </div> 

    return (
        <div className="scheduler-board">
            {
                avatarList
            }
            {/* <TimeColumn hours={hours} intervals={intervals}/>
             */}
            <ScheduleTable hours={hours} intervals={intervals}/>
        </div>
    )
}

export default SchedulerBoard