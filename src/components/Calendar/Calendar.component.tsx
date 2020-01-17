import React, { useState } from 'react'
import styled from "styled-components"

import MonthPicker from './MonthPicker.component'
import SelectedDate from './SelectedDate.component'
import MonthDays from './MonthDays.component'
import Year from './Year.component'

interface ICalendarProps {
    lang?: string, 
    showSelected?: boolean
}

const CalendarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 25%;
    height: 25%;
`

const Container = styled.div`
    position: relative;
    display: block;
    box-sizing: border-box;
`

const Calendar: React.FC<ICalendarProps> = ({
    lang, showSelected
}) => {

    const [ month, setMonth ] = useState(new Date().getMonth())
    const [ year, setYear ] = useState(new Date().getFullYear())

    const handleMonthChange = ( newValue: number ) => {
      setMonth( newValue )
    }
  
    const handleYearChange = ( newValue: number ) => {
        setYear( newValue )
    }

    return (
        <CalendarWrapper>
            {
                showSelected && <SelectedDate />
            }
            <Container>
                <Year year={year} 
                    setYear={handleYearChange}
                    />
                <MonthPicker month={month} 
                    setMonth={handleMonthChange}
                    />
            </Container>
            <MonthDays month={month} 
                year={year}
                setMonth={handleMonthChange}
                setYear={handleYearChange}
                />
        </CalendarWrapper>
    )
}

export default Calendar