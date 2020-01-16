import React from 'react'
import styled from "styled-components"

// import SelectBtn from './SelectBtn.component'

interface IYearProps {
    year: number,
    yearChange?: Function
}

const YearWrapper = styled.div`
    /* flex: 2; 
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: space-around; */
`

const YearText = styled.p`
    font: 23px;
`

const Year: React.FC<IYearProps> = ({
    year, yearChange 
}) => {

//   const prevYear = () => {
//     yearChange(year - 1)
//   }

//   const nextYear = () => {
//     yearChange(year + 1)
//   }
  
  return(
    <YearWrapper>
        {/* <SelectBtn title={'prev'}
            action={prevYear}/> */}
        <YearText>
            { year }
        </YearText>
        {/* <SelectBtn title={'next'}
                action={nextYear}/> */}
    </YearWrapper>
  );
}

export default Year