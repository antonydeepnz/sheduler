import React from 'react'
import styled from "styled-components"

const SelectedDateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:  #ec364f;
    color: white;
`

const Day = styled.p`
    font-size: 8em;
` 

const DayLiteral = styled.p`
    font-size: 2em;
`

interface ITodayProps {
    day?: number,
    dayLiteral?: string
}

const SelectedDate: React.FC<ITodayProps> = ({
    day, dayLiteral
}) => {
    return (
        <SelectedDateWrapper>
            <Day>26</Day>
            <DayLiteral>Thuesday</DayLiteral>
        </SelectedDateWrapper>
    )
}

export default SelectedDate