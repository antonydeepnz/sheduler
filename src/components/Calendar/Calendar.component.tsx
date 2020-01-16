import React, { useState } from 'react'
import styled from "styled-components"

import MonthPicker from './MonthPicker.component'
import Today from './Today.component'
import MonthDays from './MonthDays.component'
import Year from './Year.component'

const initialState = { 
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    selected: new Date().toLocaleDateString("en-US")
}

// interface IReducerProps {
//     state: {
//         month: string,
//         year: string,
//         selected: string
//     },
//     action: any
// }

// // const reducer = ( state, action ) => {
// //   switch (action.type) {
// //     case 'changeMonth':
// //       return { ...state, month: action.payload.month, year: action.payload.year };
// //     case 'changeYear':
// //       return { ...state, year: action.payload };
// //     case 'setSelected':
// //       return { ...state, selected: action.payload }; 
// //     default:
// //       return initialState
// //   }
// // }

interface ICalendarProps {

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

}) => {

    const [ month, setMonth ] = useState(new Date().getMonth())
    const [ year, setYear ] = useState(new Date().getFullYear())

    // const [state, dispatch] = useReducer( reducer, initialState );

    const handleMonthChange = ( newValue: number ) => {
      setMonth( newValue )
    }
  
    const handleYearChange = ( newValue: number ) => {
        setYear( newValue )
    }
  
    // const setSelected = ( newValue ) => {
    //   dispatch({ type: 'setSelected', payload: newValue })
    // }
    return (
        <CalendarWrapper>
            <Today />
            <Container>
                <Year year={year}/>
                <MonthPicker month={month} setMonth={handleMonthChange}/>
            </Container>
            <MonthDays month={month} year={year}/>
        {/* <div>
            <MonthPicker month={state.month}
                year={state.year}
                monthChange={monthChange}
                yearChange={yearChange} />
        </div>       */}
            {/* <MonthDays month={state.month}
                    year={state.year} 
                    selected={state.selected} 
                    monthChange={monthChange}
                    setSelected={setSelected}/> */}
        </CalendarWrapper>
    )
}

export default Calendar