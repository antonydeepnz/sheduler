import React from 'react'
import styled from "styled-components"

import dictionaty from './dictionary.config'
import Day, { DayBasic } from './Day.component'

const dateFormat = ( date: Date ) => {
  return date.toLocaleDateString("en-US");
}

interface IMonthDaysProps {
    month: number,
    year: number,
    selected?: boolean,
    setMonth: Function,
    setYear: Function
}

const DaysWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;    
`

const DayOfWeek = styled(DayBasic)`
    font-weight: 500; 
    margin-top: 10px;
    margin-bottom: 10px;

    &:nth-child(6), &:nth-child(7){
        color: #ec364f;
        font-weight: 800; 
    } 
`

const DayInactive = styled(Day)`
    color: red;
`

const MonthDays: React.FC<IMonthDaysProps> = ({ 
  month, year, selected, setMonth, setYear 
}) => {

  const today = new Date();
  const daysInMonth = new Date(year, (month+1), 0).getDate();

  const dayOfWeek = ( day: number, month: number ) => {
    return new Date(year, (month), day).getDay()
  }

  const daysToRender = ( days: number, month: number ) => {
    const daysOfMonth = [];

    for(let i = 0; i < days; i++){
      daysOfMonth.push({
        day: i+1,
        dayOfWeek: dayOfWeek(i,month),
        thisMonth: true
      })
    }

    const firstDay = daysOfMonth[0].dayOfWeek;
    const prevMonth = month;
    const prevMonthDays = new Date(year, (month), 0).getDate();

    for(let y = prevMonthDays; y > prevMonthDays - firstDay; y--){
      daysOfMonth.unshift({
        day: y,
        dayOfWeek: dayOfWeek(y-firstDay,prevMonth),
        thisMonth: false
      })
    }

    const lastDay = daysOfMonth[daysOfMonth.length-1].dayOfWeek;
    const next = today.getMonth()+1;

    for(let z = 0; z < 6 - lastDay; z++){
      daysOfMonth.push({
        day: z+1,
        dayOfWeek: dayOfWeek(z,next),
        thisMonth: false
      })
    }
    return daysOfMonth;
  }

  const setYearMonth = (month: number, year: number ) => {
    setMonth( month )
    setYear( year )
  }

  const handleDayClick = ( thisMonth: boolean, day: number ) => {
    if(thisMonth){
      //setSelected(dateFormat(new Date(year,month,day)))
      console.log('this Month')
    }
    else 
      if(day < 8){
        month === 11
          ? setYearMonth( 0, year + 1)
          : setMonth( month + 1 )
        //setSelected(dateFormat(new Date(year,month+1,day)))
    } else
      if(day > 23){
        month === 0
        ? setYearMonth( 11, year - 1)
        : setMonth( month - 1 )
        //setSelected(dateFormat(new Date(year,month-1,day)))
    }
  }
  
  return(
    <DaysWrapper>
        {
          dictionaty.ru.weekDaysShort.map(day => 
            <DayOfWeek>
                {day}
            </DayOfWeek>)
        }
        {
          daysToRender(daysInMonth,month).map(( item, index ) => {
            if (item.thisMonth){
              return <Day key={`${item.day}-${index}`}  
                  day={item.day}
                  clickAction={() => handleDayClick(item.thisMonth, item.day)}
                  />      
            } else {
              return <DayInactive key={`${item.day}-${index}`}
                        day={item.day}
                        clickAction={() => handleDayClick(item.thisMonth, item.day)}
                        />
            }
            // return <Day key={`${item.day}-${index}`}
            //               day={item.day}
            //             />
          })
        }
    </DaysWrapper>
  );
}


export default MonthDays