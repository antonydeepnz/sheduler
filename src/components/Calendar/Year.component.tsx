import React from 'react'
import styled from "styled-components"

import SelectBtn from './SelectBtn.component'

interface IYearProps {
    year: number,
    setYear: Function
}

const YearWrapper = styled.div`
    position: relative; 
    display: flex;
    /* flex-direction: row;
    justify-content: space-around;
    align-content: space-around; */
`

const YearText = styled.p`
    font: 23px;
`

const Year: React.FC<IYearProps> = ({
    year, setYear 
}) => {

    const prevYear = () => {
        setYear(year - 1)
    }

    const nextYear = () => {
        setYear(year + 1)
    }
  
    return(
    <YearWrapper>
        <SelectBtn title={'❮'}
            action={prevYear}/>
        <YearText>
            { year }
        </YearText>
        <SelectBtn title={'❯'}
            action={nextYear}/>
    </YearWrapper>
    );
}

export default Year