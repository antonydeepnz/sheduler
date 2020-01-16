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
    monthChange?: Function,
    setSelected?: Function
}

const DaysWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;    
`
//DayWrapper оберунть DayOfWeek чтобы не повторяться
const DayOfWeek = styled(DayBasic)`
    font-weight: 500; 
    margin-top: 10px;
    margin-bottom: 10px;

    &:nth-child(6), &:nth-child(7){
        color: #ec364f;
        font-weight: 800; 
    } 
`

const MonthDays: React.FC<IMonthDaysProps> = ({ month, year, selected, monthChange, setSelected }) => {

//   const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

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

//   const handleDayClick = ({ thisMonth, day }) => {
//     if(thisMonth){
//       setSelected(dateFormat(new Date(year,month,day)))
//     }
//     else 
//       if(day < 7){
//         monthChange({month: month + 1, year: year})
//         setSelected(dateFormat(new Date(year,month+1,day)))
//     } else
//       if(day > 24){
//         monthChange({month: month - 1, year: year})
//         setSelected(dateFormat(new Date(year,month-1,day)))
//     }
//   }
  
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
            // if (item.thisMonth){
            //   return (dateFormat(new Date(year,month,item.day)) === selected)
            //     ? <Day key={`${item.day}-${index}`} 
            //             day={item.day}
            //             />
            //     : <Day key={`${item.day}-${index}`}  
            //             day={item.day}
            //             />      
            // } else {
            //   return <Day key={`${item.day}-${index}`}
            //               day={item.day}
                        
            //             />
            // }
            return <Day key={`${item.day}-${index}`}
                          day={item.day}
                        
                        />
          })
        }
    </DaysWrapper>
  );
}//clickAction={() => handleDayClick(item)}


export default MonthDays