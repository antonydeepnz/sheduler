import React from 'react'
import styled from "styled-components"

interface IDayProps {
    day: number,
    clickAction: Function,
}

export const DayBasic = styled.span`
    flex-basis: 14.2%;
    height: 25px;
    user-select: none;
    align-content: center;
    justify-content: space-around;
`

const DayWrapper = styled(DayBasic)`
    &:hover{
          background-color: #ccc;
          border-radius: 50%;
    }
`

const Day: React.FC<IDayProps> = ({ 
    day, clickAction
}) => {
  
  const handleClick = () => {
    clickAction()
  }
  
  return(
    <DayWrapper onClick={handleClick}>
        {day}
    </DayWrapper>
  );
}

export default Day