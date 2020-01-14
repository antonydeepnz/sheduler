import React from 'react'

interface IIntervalsProps {
    intervals: Array<number>
}

const Intervals: React.FC<IIntervalsProps> = ({
    intervals
}) => {
    return (
        <div className="scheduler-intervals">
                {
                    intervals.map(interval => (
                        <div className="scheduler-minutes">
                            { interval === 0
                                ? interval+'0' 
                                : interval 
                            }
                        </div>
                    ))
                }
            </div>
    )
}

export default Intervals