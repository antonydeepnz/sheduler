import React from 'react'
import styled from "styled-components"

const TodayWrapper = styled.div`
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

const Today: React.FC<ITodayProps> = ({
    day, dayLiteral
}) => {
    return (
        <TodayWrapper>
            <Day>26</Day>
            <DayLiteral>Thuesday</DayLiteral>
        </TodayWrapper>
    )
}

export default Today