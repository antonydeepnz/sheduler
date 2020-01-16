import React from 'react'
import styled from "styled-components"

import dictionary from './dictionary.config'

const MonthPickerWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    box-sizing: border-box;
    margin: 2px;
    padding: 0px;
    box-sizing: border-box;
    border-bottom: solid 1px grey;
`

const Month = styled.p`
    font-size: 1em;
    padding: 2px;

    &:hover {
        text-shadow: 0px 0px 1px #868686;
    }
`

const MonthSelected = styled(Month)`
    font-weight: 700;
`
// color: ${props => props.selected? '#171717' : '#868686'};

interface IMonthPickerProps {
    month: number,
    setMonth: Function
}

const MonthPicker: React.FC<IMonthPickerProps> = ({ 
    month, setMonth
}) => {

    const HandleMonthClick = (newMonth: number) => {
        setMonth(newMonth)
    }

  return(
    <MonthPickerWrapper>
        {
            dictionary.ru.months.map(( monthItem, index ) => (
                <>
                    {
                        index === Number(month)
                            ?<MonthSelected key={monthItem} onClick={() => (HandleMonthClick(index))}>
                                {monthItem}
                            </MonthSelected>
                            :<Month key={monthItem} onClick={() => (HandleMonthClick(index))}>
                                {monthItem}
                            </Month>
                    }
                </>
            ))
        }
    </MonthPickerWrapper>
  );
}

export default MonthPicker
